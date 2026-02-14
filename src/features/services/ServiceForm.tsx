import { useState } from "react";
import type { ServiceCategory } from "./types";
import { Input, InputWithoutLabel } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import { Button } from "../../components/ui/Button";

interface Props {
  onSubmit: (data: any) => void;
  defaultValues?: any;
}

export const ServiceForm = ({ onSubmit, defaultValues }: Props) => {
  const [form, setForm] = useState({
    name: defaultValues?.name || "",
    slug: defaultValues?.slug || "",
    description: defaultValues?.description || "",
    category: defaultValues?.category || "other",
    isActive: defaultValues?.isActive ?? true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <InputWithoutLabel
        placeholder="Service Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <InputWithoutLabel
        placeholder="Slug"
        name="slug"
        value={form.slug}
        onChange={handleChange}
      />

      <Textarea
        placeholder="Description"
        name="description"
        rows={4}
        value={form.description}
        onChange={handleChange}
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full border rounded-xl px-3 py-2"
      >
        {[
          "cleaning",
          "repair",
          "kitchen",
          "home",
          "painting",
          "electrical",
          "plumbing",
          "other",
        ].map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <Button onClick={() => onSubmit(form)}>Save Service</Button>
    </div>
  );
};
