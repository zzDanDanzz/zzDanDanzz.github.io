import { createFileRoute } from "@tanstack/react-router"
import Map, { useControl } from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"
import { MapboxOverlay, type MapboxOverlayProps } from "@deck.gl/mapbox"
import { ScatterplotLayer } from "@deck.gl/layers"

/**
 * Custom hook wrapper for Deck.gl's MapboxOverlay.
 * This bridges Deck.gl with the react-map-gl context.
 */
function DeckGLOverlay(props: MapboxOverlayProps & { interleaved?: boolean }) {
  // useControl creates the overlay once and adds it to the map
  const overlay = useControl(() => new MapboxOverlay(props))

  // Update the overlay props on subsequent React renders
  overlay.setProps(props)

  return null
}

function SafavidDemo() {
  // Define your Deck.gl layers here
  const layers = [
    new ScatterplotLayer({
      id: "example-scatterplot",
      data: [
        { position: [-122.4, 37.8], size: 1000, color: [255, 0, 0, 200] },
        { position: [-122.41, 37.81], size: 500, color: [0, 0, 255, 200] },
      ],
      getPosition: (d) => d.position,
      getRadius: (d) => d.size,
      getFillColor: (d) => d.color,
      radiusMinPixels: 5,
    }),
  ]

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 12,
          pitch: 45,
          bearing: 0,
        }}
        // Using a free MapTiler or Carto style for MapLibre
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        {/* Passing interleaved: true ensures Deck.gl layers can 
          render in between MapLibre base map layers.
        */}
        <DeckGLOverlay layers={layers} interleaved={true} />
      </Map>
    </div>
  )
}

export const Route = createFileRoute("/app")({
  component: SafavidDemo,
})
