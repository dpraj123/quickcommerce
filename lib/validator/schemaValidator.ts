import { z } from "zod";

export const productSchema = z.object({
  name: z.string({ message: "Product name should be a string" }).min(4),
  image: z.instanceof(File, {
    message: "Product image should be a image",
  }),
  description: z
    .string({ message: "Product description should be a string" })
    .min(8),
  price: z.number({ message: "Product price should be a number" }),
});

export const warehouseSchema = z.object({
  name: z.string({ message: "Warehouse name should be a string" }),
  pincode: z.string({ message: "Pincode should be a string" }).length(6),
});

export const deliveryPersonSchema = z.object({
  name: z.string({ message: "Delivery person name should be a string" }),
  phone: z
    .string({ message: "Phone should be a string" })
    .length(13, "Delivery person phone should be 13 chars long"),
  warehouseId: z.number({ message: "Warehouse id should be a number" }),
});

export const inventorySchema = z.object({
  sku: z
    .string({ message: "SKU should be a string" })
    .length(8, "SKU should be 8 chars long"),
  warehouseId: z.number({ message: "Warehouse id should be a number" }),
  productId: z.number({ message: "Product id should be a number" }),
});

export const orderSchema = z.object({
  productId: z.number({ message: "Product is should be a number" }),
  pincode: z
    .string({ message: "Pincode should be a string" })
    .length(6, "Pincode should be 6 chars long"),
  qty: z.number({ message: "Qty should be a number" }),
  address: z
    .string({ message: "Address should be a string" })
    .min(5, { message: "Address should be at least 5 chars long" }),
});

export const orderStatusSchema = z.object({
  orderId: z.number({ message: "Order Id should be a number" }),
  // todo: check if order status is in allowed status strings, ("received, paid, reserved, completed")
  status: z.string({ message: "Status should be a string" }),
});
