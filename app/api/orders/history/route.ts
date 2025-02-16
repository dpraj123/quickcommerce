import { db } from "@/lib/db";
import { orders, products } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const myOrders = await db
      .select({
        id: orders.id,
        product: products.name,
        type: orders.type,
        price: orders.price,
        image: products.image,
        productDescription: products.description,
        status: orders.status,
        address: orders.address,
        createdAt: orders.createdAt,
      })
      .from(orders)
      .leftJoin(products, eq(orders.productId, products.id))
      // todo: add types on session
      // @ts-ignore
      .where(eq(orders.userId, Number(session.token.id)));

    return Response.json(myOrders);
  } catch (err) {
    return Response.json(
      { message: "Failed to get my orders" },
      { status: 500 }
    );
  }
}
