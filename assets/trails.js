import * as routes from '../scripts/routes'

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
    title: 'Mill Mountain',
    type: markerTypes.custom,
    position: millMtPosition,
    description: 'Mill Mountain, home of the world\'s largest freestanding illuminated man-made star, constructed in 1949. Boasting 12 miles of trails that are also near beer, Mill Mountain is a staple for after work rides.',
    img: ''
  },
  headerImg: '',
  route: routes.trailsMillMt,
  parking: {
    map: {
      center: millMtPosition,
      zoom: 13
    },
    mapMarkers: [
      {
        title: 'Rivers Edge Sports Complex',
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
    title: 'Carvins Cove',
    position: carvinsCovePosition,
    type: markerTypes.custom
  },
  description: 'Carvins Cove Natural Reserve is the second largest municipal park in the nation. With more than 60 miles of trail, and a magnificent bike shop just down the street <a href="http://justtherightgear.com/">Just the Right Gear</a> Carvins Cove is the cornerstone of the Roanoke mountain biking landscape',
  promoImg: '',
  route: routes.trailsCarvinsCove,
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
    title: 'Explore Park',
    position: exploreParkPosition,
    type: markerTypes.custom
  },
  description: '',
  promoImg: '',
  route: routes.trailsExplorePark,
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
    title: 'Blue Ridge',
    position: blueRidgePosition,
    type: markerTypes.custom
  },
  description: '',
  promoImg: '',
  route: routes.trailsBlueRidge,
  parking: {
    map: {
      center: blueRidgePosition,
      zoom: 12
    }
  }
})
