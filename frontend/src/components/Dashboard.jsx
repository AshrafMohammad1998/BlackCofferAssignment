import React, { useState, useEffect } from 'react';
import axios from 'axios';
import configVariables from '../configurations/Config';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line,
  PieChart, Pie, Cell, ScatterChart, Scatter, ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [endYearFilter, setEndYearFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [sectorFilter, setSectorFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [pestleFilter, setPestleFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  const [years, setYears] = useState([]);
  const [topics, setTopics] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [regions, setRegions] = useState([]);
  const [pestle, setPestle] = useState([]);
  const [sources, setSources] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const uniqueYears = Array.from(new Set(data.map(item => item.end_year)))
      .filter(year => year)
      .sort((a, b) => a - b);
    const uniqueTopics = Array.from(new Set(data.map(item => item.topic)))
      .filter(topic => topic)
      .sort();
    const uniqueSectors = Array.from(new Set(data.map(item => item.sector)))
      .filter(sector => sector)
      .sort();
    const uniqueRegions = Array.from(new Set(data.map(item => item.region)))
      .filter(region => region)
      .sort();
    const uniquePestle = Array.from(new Set(data.map(item => item.pestle)))
      .filter(pest => pest)
      .sort();
    const uniqueSources = Array.from(new Set(data.map(item => item.source)))
      .filter(source => source)
      .sort();
    const uniqueCountries = Array.from(new Set(data.map(item => item.country)))
      .filter(country => country)
      .sort();

    setYears(uniqueYears);
    setTopics(uniqueTopics);
    setSectors(uniqueSectors);
    setRegions(uniqueRegions);
    setPestle(uniquePestle);
    setSources(uniqueSources);
    setCountries(uniqueCountries);

    if (uniqueYears.length > 0) {
      setEndYearFilter(uniqueYears[0]);
    }
  }, [data]);

  const getDashboardData = async () => {
    try {
      const response = await axios.get(`${configVariables.ipAddress}/dashboard/`)
      setData(response.data.data)
      setFilteredData(response.data.data)
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  useEffect(() => {
    getDashboardData()
  }, []);

  useEffect(() => {
    let newFilteredData = data;

    if (endYearFilter) {
      newFilteredData = newFilteredData.filter(item => item.end_year === endYearFilter);
    }
    if (topicFilter) {
      newFilteredData = newFilteredData.filter(item => item.topic === topicFilter);
    }
    if (sectorFilter) {
      newFilteredData = newFilteredData.filter(item => item.sector === sectorFilter);
    }
    if (regionFilter) {
      newFilteredData = newFilteredData.filter(item => item.region === regionFilter);
    }
    if (pestleFilter) {
      newFilteredData = newFilteredData.filter(item => item.pestle === pestleFilter);
    }
    if (sourceFilter) {
      newFilteredData = newFilteredData.filter(item => item.source === sourceFilter);
    }
    if (countryFilter) {
      newFilteredData = newFilteredData.filter(item => item.country === countryFilter);
    }

    setFilteredData(newFilteredData);
  }, [endYearFilter, topicFilter, sectorFilter, regionFilter, pestleFilter, sourceFilter, countryFilter, data]);

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#ffbb28', '#00C49F'];

  return (
    <div>
      <h1 className='text-center font-bold text-2xl underline'>Dashboard</h1>
      {/* Filter Selection */}
      <div className='flex flex-wrap items-center justify-between m-auto px-10 space-y-1'>
        <div className='flex'>
          <label className='font-bold'>End Year: </label>
          <select value={endYearFilter} onChange={(e) => setEndYearFilter(e.target.value)} className='border border-slate-500'>
            <option value="">Select a year</option>
            {years.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className='flex'>
          <label className='font-bold'>Topic: </label>
          <select value={topicFilter} onChange={(e) => setTopicFilter(e.target.value)} className='border border-slate-500'>
            <option value="">Select a topic</option>
            {topics.map(topic => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
        <div className='flex'>
          <label className='font-bold'>Sector: </label>
          <select value={sectorFilter} onChange={(e) => setSectorFilter(e.target.value)} className='border border-slate-500'>
            <option value="">Select a sector</option>
            {sectors.map(sector => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>
        <div className='flex'>
          <label className='font-bold'>Region: </label>
          <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)} className='border border-slate-500'>
            <option value="">Select a region</option>
            {regions.map(region => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        <div className='flex'>
          <label className='font-bold'>PESTLE: </label>
          <select value={pestleFilter} onChange={(e) => setPestleFilter(e.target.value)} className='border border-slate-500'>
            <option value="">Select a PESTLE</option>
            {pestle.map(pest => (
              <option key={pest} value={pest}>
                {pest}
              </option>
            ))}
          </select>
        </div>
        <div className='flex'>
          <label className='font-bold'>Source: </label>
          <select value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)} className='border border-slate-500'>
            <option value="">Select a source</option>
            {sources.map(source => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </div>
        <div className='flex'>
          <label className='font-bold'>Country: </label>
          <select value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)} className='border border-slate-500'>
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Bar Chart for Intensity, Likelihood, Relevance by Topics */}
      <div className="chart-container my-5">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="topic" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="intensity" fill="#8884d8" />
            <Bar dataKey="likelihood" fill="#82ca9d" />
            <Bar dataKey="relevance" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart for Yearly Trends */}
      <div className="chart-container my-5">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="end_year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="intensity" stroke="#8884d8" />
            <Line type="monotone" dataKey="likelihood" stroke="#82ca9d" />
            <Line type="monotone" dataKey="relevance" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart for Distribution by Country */}
      <div className="chart-container my-5">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={filteredData}
              dataKey="intensity"
              nameKey="country"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Scatter Plot for Intensity vs. Likelihood */}
      <div className="chart-container my-5">
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 10, right: 30, bottom: 0, left: 30 }}>
            <CartesianGrid />
            <XAxis type="number" dataKey="intensity" name="Intensity" />
            <YAxis type="number" dataKey="likelihood" name="Likelihood" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Intensity vs Likelihood" data={filteredData} fill="#8884d8" />
            <Legend />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
