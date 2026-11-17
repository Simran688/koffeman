import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[75vh] py-16 md:py-24 bg-[#F5EBDD] flex items-center">
      <Container>
        <div className="max-w-xl mx-auto text-center bg-[#FFFDF8] border border-[#C5A66B]/35 rounded-[24px] p-8 md:p-14 shadow-[0_20px_50px_rgba(33,18,15,0.08)]">
          <span
            aria-hidden="true"
            className="font-cormorant font-bold text-[76px] md:text-[100px] leading-none text-[#C5A66B] block mb-2"
          >
            404
          </span>
          <div className="section-kicker">Page Not Found</div>
          <h1 className="font-cormorant font-bold text-[32px] md:text-[42px] text-[#21120F] m-0 mb-4 leading-tight">
            Oops! This Cup Is Empty
          </h1>
          <p className="text-xs sm:text-sm text-[#75452F] leading-[1.7] mb-8 max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or may have moved. Let&apos;s get you back to the fresh brew and comfort bites.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="dark" href="/" className="!py-3 !px-6 text-xs font-bold uppercase tracking-wider">
              Return Home
            </Button>
            <Button variant="outline" href="/menu" className="!py-3 !px-6 text-xs font-bold uppercase tracking-wider">
              Browse Menu
            </Button>
            <Button variant="gold" href="/visit-us" className="!py-3 !px-6 text-xs font-bold uppercase tracking-wider">
              Visit NSP Outlets
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-[#F5EBDD] text-xs text-[#8F7466]">
            Need help? Call us at{" "}
            <a
              href="tel:+919811161923"
              className="font-bold text-[#21120F] hover:text-[#B87943] transition-colors"
            >
              +91 9811161923
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
