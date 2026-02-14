import { useEffect, useState } from "react";
import {
  getServices,
  createService,
  updateService,
  deleteService,
} from '../../../features/services/service.api'
import type { Service } from "../../../features/services/types";
import { ServiceForm } from "../../../features/services/ServiceForm";
import { ServiceTable } from "../../../features/services/ServiceTable";
import { Button } from "../../../components/ui/Button";

export const AdminServicePage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [editing, setEditing] = useState<Service | null>(null);
  const [showForm, setShowForm] = useState(false);

  const loadServices = async () => {
    const data = await getServices();
    setServices(data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleSubmit = async (data: any) => {
    if (editing) {
      await updateService(editing._id, data);
    } else {
      await createService(data);
    }
    setShowForm(false);
    setEditing(null);
    loadServices();
  };

  const handleDelete = async (id: string) => {
    await deleteService(id);
    loadServices();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Service Management</h1>
        <Button onClick={() => setShowForm(true)}>
          Create Service
        </Button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-2xl shadow">
          <ServiceForm
            defaultValues={editing}
            onSubmit={handleSubmit}
          />
        </div>
      )}

      <ServiceTable
        services={services}
        onEdit={(s) => {
          setEditing(s);
          setShowForm(true);
        }}
        onDelete={handleDelete}
      />
    </div>
  );
};
