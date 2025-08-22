// app/context/SiteSettingsContext.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { fetchSiteSettingsData } from "@/lib/siteSettingsApi";
import {  SiteSettingsContextProps } from "@/interfaces/page";


const SiteSettingsContext = createContext<SiteSettingsContextProps>({
  settings: null,
  loading: true,
});

export const SiteSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchSiteSettingsData();
        setSettings(response?.data || null);
        
      } catch (error) {
        console.error("Error fetching site settings:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <SiteSettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SiteSettingsContext.Provider>
  );
};

export const useSiteSettings = () => useContext(SiteSettingsContext);
