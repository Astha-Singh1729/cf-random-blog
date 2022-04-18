import time
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://codeforces.com/catalog")
link_box = driver.find_element(By.CLASS_NAME, "_CatalogViewFrame_catalog")
link_list = link_box.find_elements(By.TAG_NAME, 'a')
ultimate_num = []
for link in link_list:
    pepega = link.get_attribute('href')
    if "profile" not in pepega:
        ultimate_num.append(pepega.split('/')[-1])

print(ultimate_num)
time.sleep(30)
driver.close()