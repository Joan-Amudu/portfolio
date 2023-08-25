import Link from 'next/link'

export default function Contact() {
    return (
        <div className="Contact">
            <h1>Contact</h1>
            <p>This is the contact page.
            Nothing to see, go <Link href="/">home</Link>.</p>
        </div>
    )
}