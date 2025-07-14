"use client";

import { useActionState } from "react";
import { createEvent } from "@/actions/createEvent";
import {
  Input,
  Textarea,
  Checkbox,
  DatePicker,
  TimeInput,
  Select,
  SelectItem,
} from "@heroui/react";

export default function CreateEventForm({ onSuccess }) {
  const initialState = { success: false, error: null };

  async function handleSubmit(_, formData) {
    try {
      await createEvent(formData);
      if (onSuccess) onSuccess();
      return { success: true, error: null };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  const [state, formAction] = useActionState(handleSubmit, initialState);

  const sportType = [
    { key: "Futsal", label: "Futsal" },
    { key: "Basketball", label: "Basketball" },
    { key: "Badminton", label: "Badminton" },
    { key: "Yoga", label: "Yoga" },
    { key: "Tennis", label: "Tennis" },
    { key: "Other", label: "Other" },
  ];

  return (
    <form action={formAction} id="event-form" className="space-y-6">
      <Input
        name="title"
        label="Title"
        placeholder="Event name"
        isRequired
        errorMessage="Title is required"
      />
      <Textarea
        name="description"
        label="Description"
        placeholder="Event description (optional)"
      />
      <Select
        name="sport_type"
        label="Sport Type"
        placeholder="Example: Futsal, Badminton"
        isRequired
        errorMessage="Sport type is required"
      >
        {sportType.map((sport) => (
          <SelectItem key={sport.key}>{sport.label}</SelectItem>
        ))}
      </Select>
      <div className="flex space-x-3">
        <DatePicker
          name="date"
          label="Date"
          type="datetime-local"
          isRequired
          errorMessage="Date is required"
        />
        <TimeInput
          name="time"
          label="Time"
          type="datetime-local"
          isRequired
          errorMessage="Time is required"
        />
      </div>
      <Input
        name="max_participant"
        label="Max Participants"
        type="number"
        placeholder="Number of max participants"
      />
      <Input
        name="location_name"
        label="Location Name"
        placeholder="Location (Field or pool name)"
      />
      <Input
        name="city"
        label="City"
        placeholder="City name"
        isRequired
        errorMessage="City is required"
      />
      <Input
        name="price"
        label="Price"
        type="number"
        placeholder="Total cost (optional)"
      />
      <Input
        name="image"
        label="Image"
        type="file"
        placeholder="Banner image"
      />
      <Checkbox name="is_private" value="true">
        Private Event
      </Checkbox>

      {state.error && (
        <p className="text-sm text-red-600 text-center">{state.error}</p>
      )}
    </form>
  );
}
