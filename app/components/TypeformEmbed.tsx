// Purpose: Embed Typeform contact form or show a friendly setup hint.
import { TYPEFORM_EMBED_URL } from "../utils/site";

// Embedded Typeform panel. If the URL is missing, show a friendly hint.
export function TypeformEmbed() {
  if (!TYPEFORM_EMBED_URL) {
    return (
      <div className="typeform-placeholder">
        <p>
          Typeform embed is not configured yet. Paste your Typeform embed URL
          into <code>TYPEFORM_EMBED_URL</code> in <code>app/utils/site.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="typeform-embed">
      {/* Iframe embeds the hosted Typeform directly into the page. */}
      <iframe
        title="Hutchinson Change contact form"
        src={TYPEFORM_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
