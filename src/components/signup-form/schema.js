import Joi from "joi-browser";

const nameSchema = Joi.string().min(3).max(30).required().label("Name");
const emailShcema = Joi.string()
  .email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  })
  .required()
  .label("Email");
const planSchema = Joi.object()
  .keys({ id: Joi.string(), name: Joi.string(), price: Joi.string() })
  .required()
  .label("Plan");
const phoneNumberSchema = Joi.number().required().label("Phone Number");
const companySchema = Joi.string()
  .min(3)
  .max(30)
  .allow("")
  .label("Company Name");

export const userSchema = Joi.object({
  name: nameSchema,
  email: emailShcema,
  plans: planSchema,
  phoneNumber: phoneNumberSchema,
  company: companySchema,
});

export const inputSchemas = {
  name: nameSchema,
  email: emailShcema,
  plans: planSchema,
  phoneNumber: phoneNumberSchema,
  company: companySchema,
};
