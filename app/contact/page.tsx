import Container from '@/components/common/Container';
import ContactForm from '@/components/contact/ContactForm';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
    ...getMetadata('/contact'),
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    }
};

export default function ContactPage() {
    return (
        <Container className="py-16">
            <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Contact
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Get in touch with me. I will get back to you as soon as possible.
                    </p>
                </div>

                <Separator />

                {/* Contact Form */}
                <div className="mx-auto max-w-2xl">
                    <ContactForm />
                </div>
            </div>
        </Container>
    );
}
