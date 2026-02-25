"use client"

import { useEffect, useRef, useState } from "react"
import { impactMetrics } from "@/lib/site-data"

function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const numericPart = value.replace(/[^0-9]/g, "")
  const prefix = value.match(/^[^0-9]*/)?.[0] || ""
  const suffix = value.replace(/^[^0-9]*[0-9]+/, "") || ""
  const target = parseInt(numericPart, 10)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView || isNaN(target)) return
    let start = 0
    const duration = 1200
    const startTime = performance.now()

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * target)
      setCurrent(start)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target])

  if (isNaN(target)) return <span>{value}</span>
  return (
    <span>
      {prefix}
      {current}
      {suffix}
    </span>
  )
}

export function ImpactMetrics() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="metrics" className="px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Key Impact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Results that matter
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="group flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
            >
              <p className="text-3xl font-bold text-primary md:text-4xl">
                <AnimatedValue value={metric.value} inView={inView} />
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {metric.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
