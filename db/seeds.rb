# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Trips
trip1 = Trip.create(destination: "Tokyo", likes: 0)
trip2 = Trip.create(destination: "Paris", likes: 0)
trip3 = Trip.create(destination: "London", likes: 0)
trip4 = Trip.create(destination: "Taipei", likes: 0)
trip5 = Trip.create(destination: "Seoul", likes: 0)
trip6 = Trip.create(destination: "Barcelona", likes: 0)


#attractions
attraction1 = Attraction.create(name: "Tsukiji Market", city: "Tokyo", category: "cultural", img_url: "https://www.japan-guide.com/g2/3021_03.jpg", price: "n/a", website: "http://www.tsukiji-market.or.jp")
attraction2 = Attraction.create(name: "Ghibli Museum", city: "Tokyo", category: "museum", img_url: "https://media-cdn.tripadvisor.com/media/photo-o/10/8e/f2/6d/caption.jpg", price: "¥1000", website: "http://www.ghibli-museum.jp")

attraction3 = Attraction.create(name: "Eiffel Tower", city: "Paris", category: "landmark", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1200px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg", price: "n/a", website: "http://www.toureiffel.paris")
attraction4 = Attraction.create(name: "Musée du Louvre", city: "Paris", category: "museum", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/800px-Louvre_Museum_Wikimedia_Commons.jpg", price: "€15", website: "http://www.louvre.fr")

attraction5 = Attraction.create(name: "Tate Modern", city: "London", category: "museum", img_url: "http://www.tate.org.uk/sites/default/files/styles/width-600/public/images/newtatemodernsouthview.jpg", price: "n/a", website: "http://www.tate.org.uk")
attraction6 = Attraction.create(name: "Westminster Abbey", city: "London", category: "landmark", img_url: "https://cdn.londonandpartners.com/asset/westminster-abbey-westminster-abbey-e7fd5ab22fe5e9dc0fb2a4b7f3e593f3.jpg", price: "£22", website: "http://www.westminster-abbey.org")

attraction7 = Attraction.create(name: "National Palace Museum", city: "Taipei", category: "museum", img_url: "https://thumbnails.trvl-media.com/I5eY6PTHMDLvDyUVPUWT-JbxUmY=/768x432/images.trvl-media.com/media/content/shared/images/travelguides/destination/180030/National-Palace-Museum-56682.jpg", price: "$250", website: "http://www.npm.gov.tw/en")
attraction8 = Attraction.create(name: "Confucius Temple", city: "Taipei", category: "temple", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Taipei_Confucius_Temple_1.jpg/1200px-Taipei_Confucius_Temple_1.jpg", price: "n/a", website: "http://www.ct.taipei.gov.tw")

attraction9 = Attraction.create(name: "Gyeongbokgung", city: "Seoul", category: "palace", img_url: "https://lonelyplanetimages.imgix.net/a/g/hi/t/2a82f3d7d66657d57150e6ec98a102e4-gyeongbokgung.jpg?auto=enhance&w=770&h=430&fit=crop", price: "₩3000", website: "http://www.royalpalace.go.kr")
attraction10 = Attraction.create(name: "Gwangjang Market", city: "Seoul", category: "cultural", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Gwangjangmarket_mainentrance.jpg/1200px-Gwangjangmarket_mainentrance.jpg", price: "n/a", website: "http://www.kwangjangmarket.co.kr")

attraction11 = Attraction.create(name: "Museu Picasso", city: "Barcelona", category: "museum", img_url: "http://www.bcn.cat/museupicasso/imatges/elmuseu/presentacio/sales1-museu-picasso-barcelona.jpg", price: "€14", website: "http://www.museupicasso.bcn.cat")
attraction12 = Attraction.create(name: "La Sagrada Família", city: "Barcelona", category: "landmark", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/1200px-Sagrada_Familia_01.jpg", price: "€15", website: "http://www.sagradafamilia.org")
