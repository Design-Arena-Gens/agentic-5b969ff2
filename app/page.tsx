import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="section pt-20 md:pt-28">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image src="/favicon.svg" alt="GreenLeaf" width={32} height={32} />
            <span className="font-semibold text-lg">GreenLeaf Landscapes</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-brand-700">Services</a>
            <a href="#work" className="hover:text-brand-700">Our Work</a>
            <a href="#testimonials" className="hover:text-brand-700">Reviews</a>
            <a href="#contact" className="hover:text-brand-700">Contact</a>
          </div>
          <Link href="#contact" className="hidden md:inline-flex rounded-full bg-brand-600 text-white px-5 py-2.5 shadow-soft hover:bg-brand-700 transition">Get a Free Quote</Link>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-10 md:mt-14">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Beautiful, Sustainable Gardens
              <br />
              <span className="text-gradient">Designed and Built Locally</span>
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-xl">
              We craft timeless outdoor spaces?patios, lawns, borders and planting?using eco-conscious materials and thoughtful design. Friendly, professional and tidy. Fully insured.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="#contact" className="rounded-full bg-brand-600 text-white px-6 py-3 shadow-soft hover:bg-brand-700 transition">Book a Free Visit</Link>
              <a href="tel:+441234567890" className="rounded-full border border-brand-600 text-brand-700 px-6 py-3 hover:bg-brand-50 transition">Call 01234 567 890</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="i">??</span> 10+ years experience</div>
              <div className="flex items-center gap-2"><span className="i">??</span> We tidy as we go</div>
              <div className="flex items-center gap-2"><span className="i">?</span> Free, no-obligation quotes</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[320px] md:h-[420px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1551892589-865f69869443?q=80&w=1400&auto=format&fit=crop"
                alt="Freshly landscaped garden with patio and lawn"
                fill
                className="rounded-2xl object-cover shadow-xl"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-soft p-4 hidden md:block">
              <p className="text-sm font-medium">Rated 4.9/5 by local homeowners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
          <p className="mt-3 text-gray-700">From complete transformations to seasonal care?tailored to your garden and budget.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {title:'Garden Design', desc:'Concept to completion, planting plans and structure.'},
            {title:'Patios & Paths', desc:'Natural stone, porcelain, brick edging and steps.'},
            {title:'Turfing & Lawn Care', desc:'New lawns, returfing, aeration, scarifying.'},
            {title:'Fencing & Decking', desc:'Boundary solutions and outdoor living areas.'},
            {title:'Planting & Borders', desc:'Soil prep, perennials, shrubs and year-round interest.'},
            {title:'Water & Lighting', desc:'Ponds, water features and subtle garden lighting.'},
            {title:'Maintenance', desc:'Regular tidy-ups, hedge cutting and pruning.'},
            {title:'Driveways', desc:'Block paving and gravel installations.'},
          ].map((s, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="text-2xl">{['??','??','??','??','??','??','??','??'][i]}</div>
              <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Work */}
      <section id="work" className="section py-20 md:py-28 bg-white rounded-3xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Craftsmanship you can see</h2>
            <p className="mt-3 text-gray-700">We focus on durable foundations, precise finishing and thoughtful planting for spaces that mature beautifully.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>? Permeable and sustainable materials</li>
              <li>? Attention to drainage and levels</li>
              <li>? Plant selections for your light and soil</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              'photo-1523419409543-a9f42137f2b4','photo-1501004318641-b39e6451bec6','photo-1545332634-5a1fae02b0aa',
              'photo-1470497284178-84a39c105b16','photo-1542314831-068cd1dbfeeb','photo-1535968881801-c0b3b195a3f2'
            ].map((id, i) => (
              <div key={i} className="relative h-24 md:h-36 lg:h-44">
                <Image
                  src={`https://images.unsplash.com/${id}?q=80&w=600&auto=format&fit=crop`}
                  alt="Garden project"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">What our clients say</h2>
          <p className="mt-3 text-gray-700">Local homeowners trust us for quality, reliability and care.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {name:'Emma R.', text:'Transformed our muddy patch into a beautiful family garden. Impeccable finish.'},
            {name:'Daniel K.', text:'On time, on budget and spotless site every day. Five stars.'},
            {name:'Aisha M.', text:'Planting plan is stunning through the seasons. Highly recommend!'},
          ].map((t, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl">??????????</div>
              <p className="mt-3 text-gray-700">?{t.text}?</p>
              <p className="mt-4 text-sm font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="section py-16 md:py-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to love your garden?</h3>
            <p className="mt-2 text-white/90">Get a free, friendly site visit and fixed quote.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:hello@greenleaf.example" className="rounded-full bg-white text-brand-700 px-6 py-3 font-medium hover:bg-brand-50 transition">Email Us</a>
            <a href="tel:+441234567890" className="rounded-full border border-white/30 px-6 py-3 font-medium hover:bg-white/10 transition">Call 01234 567 890</a>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">Serving: Anytown, Northside, Westfield, and surrounding villages.</p>
        <footer className="mt-10 py-8 border-t border-gray-200 text-sm text-gray-600">
          <div className="section flex flex-col md:flex-row gap-3 items-center justify-between">
            <p>? {new Date().getFullYear()} GreenLeaf Landscapes. All rights reserved.</p>
            <p>Fully insured ? Waste carrier licensed</p>
          </div>
        </footer>
      </section>
    </main>
  )
}
