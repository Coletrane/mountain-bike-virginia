import {trailsMillMt, trailsCarvinsCove, trailsBlueRidge, trailsExplorePark} from '../scripts/routes'

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
    type: markerTypes.custom
  },
  description: 'Carvins Cove Natural Reserve is the second largest municipal park in the nation. With more than 60 miles of trail, and a magnificent bike shop just down the street <a href="http://justtherightgear.com/">Just the Right Gear</a> Carvins Cove is the cornerstone of the Roanoke mountain biking landscape',
  promoImg: '',
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
trailAreas.push({
  mapMarker: {
    title: {
      text: 'Blue Ridge',
      link: trailsBlueRidge
    },
    position: blueRidgePosition,
    type: markerTypes.custom
  },
  description: '',
  promoImg: '',
  route: trailsBlueRidge,
  parking: {
    map: {
      center: blueRidgePosition,
      zoom: 12
    }
  }
})

// Helper functions
export const findTrailArea = (currentRoutePath) => {
  const routeArr = currentRoutePath.split('/')
  const trailName = routeArr[routeArr.length - 1].split('-').join(' ')
  const trailArea = trailAreas.find(area => {
    return area.mapMarker.title.toLowerCase() === trailName
  })
  return trailArea
}
