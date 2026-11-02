import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, MessageCircle } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { buildWhatsAppLink } from "@/lib/config";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found — Bin Friend" };
  return { title: `${post.title} — Bin Friend`, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const whatsappUrl = buildWhatsAppLink(
    `Hi Bin Friend! I read your article "${post.title}" and would like to learn about your pickup services.`
  );

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-14">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back to all articles
      </Link>

      {/* Header Info */}
      <div className="mt-6">
        <span className="inline-block rounded-full bg-brand-light px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
          {post.category}
        </span>
        <h1 className="mt-4 text-2xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl sm:leading-tight">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-foreground/60 border-b border-black/10 pb-6">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4 text-brand" /> {post.author}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-brand" />
            {new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-brand" /> 3 min read
          </span>
        </div>
      </div>

      {/* Featured Header Image */}
      <div className="relative mt-8 aspect-16/9 w-full overflow-hidden rounded-3xl border border-black/8 bg-slate-100 shadow-md">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      {/* Post Content */}
      <div className="mt-10 space-y-5 text-base sm:text-lg text-foreground/80 leading-relaxed">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Call to action card */}
      <div className="mt-14 overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand-light/60 to-emerald-50/40 p-6 sm:p-8 text-center shadow-sm">
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">
          Want help managing your home or office waste?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-foreground/65">
          Bin Friend makes waste segregation simple with quality color-coded dustbins and scheduled
          WhatsApp-coordinated doorstep pickups.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow transition-all hover:bg-brand-dark"
          >
            <MessageCircle className="h-4 w-4" /> Message on WhatsApp
          </a>
          <Link
            href="/shop"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-brand/30 bg-white px-7 py-3.5 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-light"
          >
            Explore Bins
          </Link>
        </div>
      </div>
    </article>
  );
}
