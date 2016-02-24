class WelcomeController < ApplicationController
  include HTTParty
  def index
    puts "THIS IS JUST AT TEST:"
    puts "GET ALL FOSSIL COLLECTIONS IN LAT/LONG BOX"
    url = "https://paleobiodb.org/data1.2/colls/summary.json?lngmin=165.0&lngmax=60.0&latmin=15.0&latmax=60.0&level=2"
    pp HTTParty.post(url)

    puts "DETAILED FOSSIL"
    url2 = "https://paleobiodb.org/data1.2/colls/single.json?id=2000070&show=full"
    pp HTTParty.post(url2)
  end

  def getList

    p "hit getList"

    url = "https://paleobiodb.org/data1.2/colls/summary.json?lngmin=165.0&lngmax=60.0&latmin=15.0&latmax=60.0&level=2"
    entire_list = HTTParty.post(url)

    render json: entire_list.to_json

  end

  def getDetail
    url2 = "https://paleobiodb.org/data1.2/colls/single.json?id=2000070&show=full"
    detail = HTTParty.post(url2)

    render json: detail.to_json
  end
end
