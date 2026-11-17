import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";

type DeliveryPanelProps = {
  className?: string;
  title?: string;
  subtitle?: string;
};

export function DeliveryPanel({
  className = "",
  title = "Order your favourites",
  subtitle = "Get KoffeeMan delivered straight to your doorstep through your preferred app.",
}: DeliveryPanelProps) {
  return (
    <div
      id="order"
      aria-label="Online ordering options"
      className={`rounded-[20px] bg-[#21120F] border border-[#C5A66B]/35 p-6 md:px-8 md:py-7 text-[#FFFDF8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] ${className}`.trim()}
    >
      <div>
        <div className="text-[10px] font-bold tracking-[0.2em] text-[#C5A66B] uppercase mb-1">
          Delivery & Takeaway
        </div>
        <h3 className="font-cormorant font-bold text-[24px] md:text-[28px] text-[#F5EBDD] m-0 mb-1 leading-snug">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-[#D8C5B8] m-0 leading-relaxed max-w-xl">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 shrink-0">
        <Button
          variant="gold"
          href={siteConfig.ordering.swiggyUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order KoffeeMan on Swiggy"
          className="!py-3 !px-6 text-xs font-bold uppercase tracking-wider"
        >
          Order on Swiggy ↗
        </Button>
        <Button
          variant="outline-gold"
          href={siteConfig.ordering.zomatoSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find KoffeeMan on Zomato"
          className="!py-3 !px-6 text-xs font-bold uppercase tracking-wider"
        >
          Find on Zomato ↗
        </Button>
      </div>
    </div>
  );
}
