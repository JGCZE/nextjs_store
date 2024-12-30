import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { getReviews } from "@/lib/actions";

const ItemReviews = async ({ reviewsIds }: { reviewsIds: Array<number> }) => {
  const reviews = await getReviews(reviewsIds);

  return (
    <div className="mt-16">
      <h3 className="font-bold mb-4 text-xl">Recenze zákazníků:</h3>
      {!reviews ? (
        <div>K tomuto produktu nejsou zatím žádné recenze</div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {reviews?.map((rev, index) => {
            const { body, id, email, name } = rev;
            return (
              <Card key={id}>
                <CardHeader>
                  <CardTitle>
                    <p>od uživatele: {email}</p>
                  </CardTitle>
                  <CardDescription>
                    <p>předmět: {name}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{body}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ItemReviews;
