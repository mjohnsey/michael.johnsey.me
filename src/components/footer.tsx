export default function Footer({
  hideOnPrint = false,
}: {
  hideOnPrint?: boolean;
}) {
  return (
    <footer class={`text-center ${hideOnPrint ? "print:hidden" : ""}`}>
      <div class="text-center text-xs text-gray-600 mt-6">
        {/* center this HR */}
        <hr class="w-full mx-auto mb-2" />
        <p>
          <a
            href="https://github.com/mjohnsey/michael.johnsey.me"
            class="underline"
          >
            &copy; {new Date().getFullYear()} Michael Johnsey
          </a>
        </p>
      </div>
    </footer>
  );
}
