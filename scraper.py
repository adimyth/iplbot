from bs4 import BeautifulSoup
import requests
import json
import pandas as pd
from pprint import pprint


def get_points_table():
    url = 'https://www.cricbuzz.com/cricket-series/2810/indian-premier-league-2019/points-table'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    data = []
    final_data = []
    points_table = soup.find("table", {"class": "table cb-srs-pnts"})
    table_body = points_table.find('tbody')

    rows = table_body.find_all('tr')
    for row in rows:
        cols = row.find_all('td')
        cols = [ele.text.strip() for ele in cols]
        data.append([ele for ele in cols if ele])

    response_dict = {}
    count = 0
    for x in data:
        if len(x) == 8:
            temp = dict()
            count = count+1
            temp['team_name'] = ''.join(x[0].split())
            temp['mat'] = x[1]
            temp['won'] = x[2]
            temp['lost'] = x[3]
            temp['tied'] = x[4]
            temp['nr'] = x[5]
            temp['pts'] = x[6]
            temp['nrr'] = x[7]
            response_dict[count] = temp
    return response_dict
