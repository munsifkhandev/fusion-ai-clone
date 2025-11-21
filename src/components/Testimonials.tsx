import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    content: 'Fusion AI has transformed how we handle automation. The visual workflow builder is incredibly intuitive.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    content: 'The AI-powered features save us hours every week. Best automation tool we\'ve ever used.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Lead',
    content: 'Implementation was seamless and the results were immediate. Highly recommend to any team.',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 relative" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by Teams Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm p-8"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6">{testimonial.content}</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary" />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
