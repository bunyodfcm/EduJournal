"use client";
import { useState, useEffect } from "react";

export const useContent = (
  slug?: string | null,
  page_id?: number | null,
  type?: string | null
) => {
  const [content, setContent] = useState(null);
  const [structureId, setStructureId] = useState(null);
  const [employees, setEmployees] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Resolve Accept-Language from localStorage (client side only)
        const acceptLang =
          typeof window !== "undefined"
            ? (localStorage.getItem("locale") as string) || "uz"
            : "uz";

        // Birinchi API so'rovi - content olish
        const response = await fetch(
          `https://mamun.university/api/v1/site/contents?limit=404&${
            page_id ? `page_id=${page_id}` : `slug=${slug}`
          }${type ? `&type=${type}` : ""}`,
          {
            headers: {
              "Accept-Language": acceptLang,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setContent(result);

        const structure_id = result?.data?.structure_id;
        setStructureId(structure_id);

        // Ikkinchi API so'rovi - employees olish (agar structure_id mavjud bo'lsa)
        if (structure_id) {
          const employeesResponse = await fetch(
            `https://mamun.university/api/v1/hr/employees?structure_id=${structure_id}`,
            {
              headers: {
                "Accept-Language": acceptLang,
              },
            }
          );

          if (!employeesResponse.ok) {
            console.error(
              `Employees API error! status: ${employeesResponse.status}`
            );
            // Employees xatosi bo'lsa ham davom etamiz
          } else {
            const employeesResult = await employeesResponse.json();

            const sortedData = [...employeesResult.data].sort(
              (a: any, b: any) => a.position.order - b.position.order
            );

            setEmployees(sortedData);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, page_id, type]);

  return { content, structureId, employees, loading, error };
};
