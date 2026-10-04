import Container from './Container';

export default function Footer() {
  return (
    <footer><Container className="py-16">
      <div className="flex flex-col items-center justify-center">
        <a href="/contact" className="mb-4 inline-flex min-h-11 items-center underline underline-offset-4">Contact Kunj</a>
        <p className="text-sm text-secondary text-center">
          Design & Developed by <b>Kunj Detroja</b> <br /> &copy;{' '}
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Container></footer>
  );
}
