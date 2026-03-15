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
import { Link } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

type FieldConfig<T extends Record<string, string>> = {
  name: keyof T
  label: string
  placeholder: string
  type: React.HTMLInputTypeAttribute
}

type AuthFormProps<T extends Record<string, string>> = {
  title: string
  description: string
  buttonText: string
  linkText: string
  linkTo: string
  linkLabel: string
  schema: z.ZodType<T>
  defaultValues: T
  fields: readonly FieldConfig<T>[]
}

export function AuthForm<T extends Record<string, string>>({
  title,
  description,
  buttonText,
  linkText,
  linkTo,
  linkLabel,
  schema,
  defaultValues,
  fields,
}: AuthFormProps<T>) {
  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: schema,
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    },
  })

  return (
    <Card className="max-w-md w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            {fields.map((item) => (
              <form.Field key={String(item.name)} name={item.name}>
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
                        placeholder={item.placeholder}
                        autoComplete="off"
                        aria-invalid={isInvalid}
                      />

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              </form.Field>
            ))}

            <Field>
              <Button type="submit">{buttonText}</Button>

              <FieldDescription className="text-center">
                {linkText} <Link to={linkTo}>{linkLabel}</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}