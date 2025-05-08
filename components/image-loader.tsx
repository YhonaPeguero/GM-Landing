"use client"

import type React from "react"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

interface ImageLoaderProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallback?: React.ReactNode
}

export function ImageLoader({ fallback, alt, ...props }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative w-full h-full">
      {isLoading && !hasError && <Skeleton className="absolute inset-0 w-full h-full rounded-md bg-gray-200" />}

      {hasError ? (
        fallback || (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 rounded-md">
            <span className="text-sm">Imagen no disponible</span>
          </div>
        )
      ) : (
        <Image
          {...props}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
        />
      )}
    </div>
  )
}
