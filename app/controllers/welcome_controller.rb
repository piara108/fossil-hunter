class WelcomeController < ApplicationController
  include HTTParty
  def index
    puts "\n###########################################################"
    puts "THIS IS JUST AT TEST:"
    puts "GET ALL FOSSIL COLLECTIONS IN LAT/LONG BOX"
    url = "https://paleobiodb.org/data1.2/colls/summary.json?lngmin=165.0&lngmax=60.0&latmin=15.0&latmax=60.0&level=2"
    puts url
    pp HTTParty.get(url)

    puts "\n###########################################################"
    puts "DETAILED FOSSIL"
    sample_oid = '2179070'
    # url2 = "https://paleobiodb.org/data1.2/colls/single.json?id=2000070&show=full"
    url2 = "https://paleobiodb.org/data1.2/colls/single.json?id=#{sample_oid}&show=full"
    p url2
    pp HTTParty.get(url2)
    puts "\n###########################################################"
  end
end
