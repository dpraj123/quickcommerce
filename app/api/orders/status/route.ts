import { db } from "@/lib/db";
import { orders } from "@/lib/db/schema";
import { orderStatusSchema } from "@/lib/validator/schemaValidator";
import { eq } from "drizzle-orm";

export async function PATCH(request: Request) {
  const requestData = await request.json();
  let validatedData;

  try {
    validatedData = orderStatusSchema.parse(requestData);
  } catch (err) {
    return Response.json({ message: err }, { status: 400 });
  }

  try {
    await db
      .update(orders)
      .set({ status: validatedData.status })
      .where(eq(orders.id, validatedData.orderId));

    return Response.json({ message: validatedData.status }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Failed to update the order" },
      { status: 500 }
    );
  }
}
