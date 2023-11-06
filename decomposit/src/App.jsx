import React from 'react';
import './App.css';
import { news, stocks, search, banner, weather, broadcast, mostVisited } from './AppData/AppData';
import List from './components/List/List';
import { nanoid } from 'nanoid';
import Search from './components/Search/Search';
import Banner from './components/Banner/Banner';
import Weather from './components/Weather/Weather';
import Block from './components/Block/Block';

export default function App() {
  return (
    <div className="App">
      <div className="news__header">

        <List className="news__tabs">
          {news.header.map((item) =>
            <h1 key={nanoid()} className="news__tab-wrapper news__head-item">
              <a className="news__tab-link" href={item.link}>
                <span className="news__tab-text">{item.title}</span>
              </a>
            </h1>
          )}
        </List>

        <div className="news__panels">
          <div className="news__panel">

            <List className="list news__list">
              {news.data.region.news.map((item) =>
                <li key={nanoid()} className="list__item">
                  <a className="news__item-link" href={item.href}>
                    <span className="news__item-inner">
                      <div className="news__agency-icon">
                        <img src={item.agency_logo} className="news__agency-icon-image" alt={item.agency_name} />
                      </div>
                      <span className="news__item-content">{item.full}</span>
                    </span>
                  </a>
                </li>
              )}
            </List>

          </div> 
        </div> 
      </div> 

      <List className="inline-stocks__content">
        {stocks.map((item) =>
          <div key={nanoid()} className="b-inline inline-stocks__item">
            <div className="inline-stocks__title">{item.title}</div>
            <span className="inline-stocks__value">
              <span className="inline-stocks__value_inner">{item.value}</span>
            </span>
            <span className="inline-stocks__cell">{item.value_change}</span>
          </div>
        )}
      </List>

      <div className="services-new__content">
        <List className="services-new__list">
          {search.menu.map((item) =>
            <li key={nanoid()} className="services-new__item-title">{item}</li>
          )}
        </List>
      </div>

      <Search img={search.logo} className="search-widget" value={search} />
      <Banner alt={banner.alt} src={banner.src} />

      <div className="row row-block bottom-row">
        <Block className="weather-widget" title="Погода">
          <Weather weather={weather} />
        </Block>
        <Block className="schuddle" title="Карта">
          <div>Расписание</div>
        </Block>
        <Block className="broadcast" title="Эфир">
          <List className="broadcast_content">
            {broadcast.map((item) =>
              <div key={nanoid()} className="broadcast_items">
                <span className="list-icon broadcast-icon material-icons">&#10026; </span>
                <span className="broadcast-text">{item.text}</span>
                <span className="broadcast-channel secondary-text">{item.channel}</span>
              </div>
            )}
          </List>
        </Block>
        <Block className="visited" title="Посещаемое">
          <List className="most-visited-list">
            {mostVisited.map((item) =>
              <div key={nanoid()} className="most-visited_items">
                <span className="most-visited-category">{item.category}</span>
                <span className="most-visited-divider">&nbsp;&mdash;&nbsp;</span>
                <span className="most-visited-description">{item.description}</span>
              </div>
            )}
          </List>
        </Block>
      </div>

    </div>
  );
}
