import type { Service } from "./types";
import { Button } from "../../components/ui/Button";
import { Pencil, Trash } from "lucide-react";

interface Props {
  services: Service[];
  onEdit: (service: Service) => void;
  onDelete: (id: string) => void;
}

export const ServiceTable = ({ services, onEdit, onDelete }: Props) => {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3">Active</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id} className="border-t">
              <td className="p-3">{service.name}</td>
              <td className="p-3 capitalize">{service.category}</td>
              <td className="p-3 text-center">
                {service.isActive ? "Yes" : "No"}
              </td>
              <td className="p-3 flex gap-2 justify-center">
                <Button
                  variant="secondary"
                  onClick={() => onEdit(service)}
                >
                  <Pencil size={16} />
                </Button>

                <Button
                  variant="danger"
                  onClick={() => onDelete(service._id)}
                >
                  <Trash size={16} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
