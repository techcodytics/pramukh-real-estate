"use client";

import PageHeader from "@/components/PageHeader";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen mandala-bg">
      <PageHeader
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding your digital journey and personal data with the same integrity we build our homes."
        breadcrumb="Legal"
      />

      <section className="temple-spacing px-6 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h3 className="text-3xl font-serif text-stone mb-8">
              Data Protection &{" "}
              <span className="italic text-gold">Integrity.</span>
            </h3>
            <p className="text-stone/70 font-sans font-light leading-relaxed mb-6">
              Pramukh Group is committed to ensuring that your privacy is
              protected. Should we ask you to provide certain information by
              which you can be identified when using this website, then you can
              be assured that it will only be used in accordance with this
              privacy statement.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-8 block">
              What We Collect
            </h4>
            <ul className="list-disc list-inside space-y-4 text-stone/70 font-sans font-light text-lg pl-6">
              <li>Name and contact information including email address</li>
              <li>
                Demographic information such as postcode, preferences and
                interests
              </li>
              <li>
                Other information relevant to customer surveys and/or offers
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-8 block">
              Security
            </h4>
            <p className="text-stone/70 font-sans font-light leading-relaxed">
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorised access or disclosure, we have put in
              place suitable physical, electronic and managerial procedures to
              safeguard and secure the information we collect online.
            </p>
          </div>

          <div className="pt-10 border-t border-stone/10 italic text-stone/40 text-sm">
            Last Updated: April 2026. This policy reflects our unwavering
            dedication to your peace of mind.
          </div>
        </div>
      </section>
    </div>
  );
}
