import { Container } from "@/components/ui/Container";
import { DeliveryPanel } from "@/components/ui/DeliveryPanel";

export function OrderingSection() {
  return (
    <section
      id="order-online"
      aria-label="Online delivery options"
      className="bg-[#F5EBDD] py-16 md:py-20 border-t border-b border-[#C5A66B]/25"
    >
      <Container>
        <DeliveryPanel
          title="Craving KoffeeMan at home?"
          subtitle="Order fresh brews, hot sandwiches, loaded burgers, and comfort snacks directly through Swiggy or discover us on Zomato."
        />
      </Container>
    </section>
  );
}
