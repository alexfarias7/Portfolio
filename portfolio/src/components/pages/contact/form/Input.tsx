import {
  useForm,
  useController,
  UseControllerProps,
  Controller,
} from "react-hook-form";

type FormValues = {
  FirstName: string;
};

export default function Input() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Controller
      name="test"
      control={control}
      rules={{
        required: true,
      }}
      render={({ field }) => {
        // sending integer instead of string.
        return (
          <input
            {...field}
            onChange={(e) => field.onChange(parseInt(e.target.value))}
          />
        );
      }}
    />
  );
}
