import Cookies from 'js-cookie'
import {Component} from 'react'

import {Link} from 'react-router-dom'

import {IoIoArrowBack, IoIoArrowForward} from 'react-icons/io'
import {BsFilterLeft, BsFillStarFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Slider from 'react-slick'

import Navbar from '../NavBar'
import Footer from '../Footer'

import 'slick-carousel/slicks/slicks.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Lowest',
    value: 'Highest',
  },
  {
    id: 1,
    displayText: 'Highest',
    value: 'Highest',
  },
]

const StatusConstants = {
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const LIMIT = 9
