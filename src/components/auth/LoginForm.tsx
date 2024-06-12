import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Typography, Box, FormControl } from '@mui/material';

export type FormValues = {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <FormControl fullWidth onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <Box mb={2}>
        <TextField
          {...register("email", { required: true })}
          label="Email"
          variant="outlined"
          fullWidth
          error={!!errors.email}
          helperText={errors.email && "Email is required"}
        />
      </Box>
      <Box mb={2}>
        <TextField
          {...register("password", { required: true })}
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          error={!!errors.password}
          helperText={errors.password && "Password is required"}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </Box>
    </FormControl>
  );
};

export default LoginForm;
