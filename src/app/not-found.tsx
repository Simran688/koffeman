import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[75vh] py-16 md:py-24 bg-[#F4E4CA] flex items-center">
      <Container>
        <div className="max-w-xl mx-auto text-center bg-[#FFF8EE] border border-[#D9C4A5] rounded-[22px] p-8 md:p-14 shadow-[0_16px_42px_rgba(57,41,41,0.08)]">
          <span
            aria-hidden="true"
            className="font-bree text-[72px] md:text-[96px] leading-none text-[#7F5738] block mb-2"
          >
            404
          </span>
          <div className="section-kicker">Page Not Found</div>
          <h1 className="font-bree text-[30px] md:text-[38px] text-[#392929] m-0 mb-4 leading-tight">
            Oops! This Cup Is Empty
          </h1>
          <p className="text-[14px] text-[#5f4a3b] leading-[1.7] mb-8 max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or may have moved. Let&apos;s get you back to the fresh brew and comfort bites.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="dark" href="/">
              Return Home
            </Button>
            <Button variant="outline" href="/menu">
              Browse Menu
            </Button>
            <Button variant="gold" href="/visit-us">
              Visit NSP Outlets
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-[#EAD8BD] text-[12px] text-[#866D5B]">
            Need help? Call us at{" "}
            <a
              href="tel:+919811161923"
              className="font-bold text-[#7F5738] hover:text-[#C84B36] transition-colors"
            >
              +91 9811161923
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
