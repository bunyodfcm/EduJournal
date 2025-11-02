"use client";
import { useState, useEffect } from "react";

export const useSingleUser = (searchId: string | number | null) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchId) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get Accept-Language from localStorage
        const acceptLang =
          typeof window !== "undefined"
            ? (localStorage.getItem("locale") as string) || "uz"
            : "uz";

        // Use proxy in development, direct URL in production
        const apiUrl = import.meta.env.DEV
          ? `/api/v1/hr/employees/?search=${searchId}`
          : `https://mamun.university/api/v1/hr/employees/?search=${searchId}`;

        const response = await fetch(apiUrl, {
          headers: {
            "Accept-Language": acceptLang,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        // API response data strukturasiga qarab, user ni olish
        const userData = result?.data?.[0] || result?.data || null;
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [searchId]);

  return { user, loading, error };
};
