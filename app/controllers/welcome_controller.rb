class WelcomeController < ApplicationController
  include HTTParty
    @@url = "https://paleobiodb.org/data1.2/colls/summary.json?lngmin=-165.0&lngmax=-61.0&latmin=24.0&latmax=60.0&level=2"
    @@url2 = "https://paleobiodb.org/data1.2/colls/single.json?id=2000070&show=full"

  def index
    # url = "https://paleobiodb.org/data1.2/colls/summary.json?lngmin=-165.0&lngmax=-61.0&latmin=24.0&latmax=60.0&level=2"
    # url2 = "https://paleobiodb.org/data1.2/colls/single.json?id=2000070&show=full"
    puts "THIS IS JUST AT TEST:"
    puts "GET ALL FOSSIL COLLECTIONS IN LAT/LONG BOX"
    pp HTTParty.post(@@url)

    # puts "DETAILED FOSSIL"
    # pp HTTParty.post(@@url2)
  end

  def getList
    # url = "https://paleobiodb.org/data1.2/colls/summary.json?lngmin=-165.0&lngmax=-61.0&latmin=24.0&latmax=60.0&level=2"

    p "hit getList"
    entire_list = HTTParty.post(@@url)
    render json: entire_list.to_json
  end

  def getDetail
    # url2 = "https://paleobiodb.org/data1.2/colls/single.json?id=2000070&show=full"
    detail = HTTParty.post(@@url2)
    render json: detail.to_json
  end
end
