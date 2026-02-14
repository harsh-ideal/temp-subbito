import axios from "axios";
import type { Service } from "./types";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export const getServices = async (): Promise<Service[]> => {
  const res = await api.get("/services");
  return res.data.data.services;
};

export const createService = async (data: Partial<Service>) => {
  const res = await api.post("/services", data);
  return res.data.data.service;
};

export const updateService = async (id: string, data: Partial<Service>) => {
  const res = await api.put(`/services/${id}`, data);
  return res.data.data.service;
};

export const deleteService = async (id: string) => {
  await api.delete(`/services/${id}`);
};
