import { Button } from '#/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { Link, useNavigate } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { signUpFields, signUpSchema } from '#/schemas/auth'
import { authClient } from '#/lib/auth-client'
import { toast } from 'sonner'

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    validators: {
      onSubmit: signUpSchema,
    },
    onSubmit: async ({ value }) => {
      const {email,fullName,password} = value
      await authClient.signUp.email({
        name: fullName,
        email,
        password,
        fetchOptions: {
          onSuccess: () => {  
            toast.success("Account created successfully!")
            navigate({
              to: "/"
            })
          },
          onError: ({error}) => {
            toast.error(error.message)
          },
        }
      })
    },
  })
  return (
    <Card {...props} className="max-w-md w-full">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
           {signUpFields.map((item) => (
              <form.Field key={item.name} name={item.name}>
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        {item.label}
                      </FieldLabel>

                      <Input
                        id={field.name}
                        name={field.name}
                        type={item.type}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        aria-invalid={isInvalid}
                        placeholder={item.placeholder}
                        autoComplete="off"
                      />

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              </form.Field>
            ))}
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link to="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
