import {s3Trails, trailsMillMt, trailsCarvinsCove, trailsBlueRidge, trailsExplorePark} from '../scripts/routes'

const googleMapsUrl = 'http://www.google.com/maps/place/'

export const markerTypes = {
  place: 'place',
  custom: 'custom'
}

export const nokeMap = {
  center: {
    lat: 37.2710,
    lng: -79.9414
  },
  zoom: 9
}

export const trailAreas = []

const millMtPosition = {
  lat: 37.2508,
  lng: -79.9324
}
trailAreas.push({
  mapMarker: {
    title: {
      text: 'Mill Mountain',
      link: trailsMillMt
    },
    type: markerTypes.custom,
    position: millMtPosition,
    description: 'Mill Mountain, home of the world\'s largest freestanding illuminated man-made star, constructed in 1949. Boasting 12 miles of trails that are also near beer, Mill Mountain is a staple for after work rides.',
    img: ''
  },
  headerImg: '',
  route: trailsMillMt,
  parking: {
    map: {
      center: millMtPosition,
      zoom: 13
    },
    mapMarkers: [
      {
        title: {
          text: 'Rivers Edge Sports Complex'
        },
        type: markerTypes.place,
        id: 'ChIJH2RZr6ANTYgRvONHVN3AIF4',
        description: ''
      }
    ]
  }
})

const carvinsCovePosition = {
  lat: 37.383471,
  lng: -79.946345
}
trailAreas.push({
  mapMarker: {
    title: {
      text: 'Carvins Cove',
      link: trailsCarvinsCove
    },
    position: carvinsCovePosition,
    type: markerTypes.custom,
    description: 'Carvins Cove Natural Reserve is the second largest municipal park in the nation. With more than 60 miles of trail, and a magnificent bike shop just down the street <a href="http://justtherightgear.com/">Just the Right Gear</a> Carvins Cove is the cornerstone of the Roanoke mountain biking landscape',
    img: ''
  },
  headerImg: '',
  route: trailsCarvinsCove,
  parking: {
    map: {
      center: carvinsCovePosition,
      zoom: 12
    }
  }
})

const exploreParkPosition = {
  lat: 37.2383,
  lng: -79.8520
}
trailAreas.push({
  mapMarker: {
    title: {
      text: 'Explore Park',
      link: trailsExplorePark
    },
    position: exploreParkPosition,
    type: markerTypes.custom
  },
  description: '',
  promoImg: '',
  route: trailsExplorePark,
  parking: {
    map: {
      center: exploreParkPosition,
      zoom: 12
    }
  }
})

const blueRidgePosition = {
  lat: 37.4087,
  lng: -79.7485
}
const dayCreekPosition = {
  lat: 37.408811,
  lng: -79.748277
}
const blueRidgeImg = `${s3Trails}/blue-ridge`
trailAreas.push({
  mapMarker: {
    title: {
      text: 'Blue Ridge',
      link: trailsBlueRidge
    },
    position: blueRidgePosition,
    type: markerTypes.custom,
    description: "Nestled in census-designated place of Blue Ridge, on the Blue Ridge Mountains, and along the Blue Ridge Parkway (America's longest linear park at 469 miles) lies a special convergence of old mining trails, and the Appalachian Trail (No bikes)",
    img: ''
  },
  headerImg: '',
  route: trailsBlueRidge,
  parking: {
    map: {
      center: blueRidgePosition,
      zoom: 12
    },
    mapMarkers: [
      {
        title: {
          text: 'Day Creek'
        },
        type: markerTypes.custom,
        position: dayCreekPosition,
        description: `<a href="${googleMapsUrl}${dayCreekPosition.lat},${dayCreekPosition.lng}"> Directions to here </a>`,
        img: `${blueRidgeImg}/day-creek-parking-lot.jpg`
      }
    ]
  }
})

// Helper functions
export const findTrailArea = (currentRoutePath) => {
  const routeArr = currentRoutePath.split('/')
  let trailName = routeArr.find(chunk => {
    return !chunk.includes('trail') && chunk !== ''
  })
  trailName = trailName.split('-').join(' ')

  const trailArea = trailAreas.find(area => {
    return area.mapMarker.title.text.toLowerCase() === trailName
  })

  return trailArea
}
