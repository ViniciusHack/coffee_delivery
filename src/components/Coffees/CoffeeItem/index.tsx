import { useState } from "react";
import { useContextSelector } from 'use-context-selector';
import { CartContext } from "../../../contexts/CartContext";
import { AmountButton } from "../../AmountButton";
import { Button } from "../../Button";
import { Actions, Badge, CoffeeItemContainer, Footer, ImageBox } from "./styles";

interface CoffeeItemProps {
  id: number;
  title: string;
  badges: string[];
  imageUrl: string;
  description: string;
  price: number;
}

export function CoffeeItem({ id, badges, description, imageUrl, price, title }: CoffeeItemProps) {
  const addNewCartItem = useContextSelector(CartContext, (context) => {
    return context.addNewCartItem
  });
  const [quantity, setQuantity] = useState(0);

  return (
    <CoffeeItemContainer>
      <ImageBox>
        <img src={imageUrl} />
      </ImageBox>
      {badges.map(badge => (
        <Badge>
          {badge}
        </Badge>
      ))}
      <h3>{title}</h3>
      <p>{description}</p>
      <Footer>
        <span>R${" "}<strong>{Intl.NumberFormat('pt-br').format(price / 100).padEnd(4, "0")}</strong></span>
        <Actions>
          <AmountButton amount={quantity} setAmount={setQuantity} size="md" />
          <Button
            mainColor="purple"
            size="md"
            onClick={() => addNewCartItem({
              id,
              title,
              imageUrl,
              price_on_cents: price,
              quantity,
            })}
            variant="default"
            icon={{
            name: "ShoppingCart",
            weight: 'fill'
            }}
          />
        </Actions>
      </Footer>
    </CoffeeItemContainer>
  )
}