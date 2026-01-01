import React, { useEffect, useState } from 'react'
import UserNavbar from '../components/UserNavbar';
import { FaCameraRetro } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import Footer from '../../common/components/Footer';
import { toast } from 'react-toastify';
import { userSubmitReportAPI } from '../../../service/allAPI';
import Loader from '../../common/components/Loader';
import { useNavigate } from 'react-router-dom';

function UserReportForm() {

  const [userReport, setUserReport] = useState({
    name: "",
    pNum: "",
    address: "",
    description: "",
    location: "",
    images: []
  })
  console.log(userReport);

  const [preview, setPreview] = useState("")
  const [uploadedImages, setUploadedImages] = useState([])
  const [token, setToken] = useState("")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()



  // const handleImage = (event)=>{
  //   // console.log(event.target.files[0]);
  //   const uploadedImages = event.target.files[0]
  //   // console.log(uploadedImages);
  //   setUserReport({...userReport, images:uploadedImages})

  // }

  const handleImage = (event) => {
    // console.log(event.target.files[0]);
    const fileArray = userReport.images
    if (fileArray) {
      fileArray.push(event.target.files[0])
      setUserReport({ ...userReport, images: fileArray })
      // convert images/files to url
      const url = URL.createObjectURL(event.target.files[0])
      // console.log(url);
      setPreview(url)

      const imgUpload = uploadedImages
      imgUpload.push(url)
      setUploadedImages(imgUpload)
      console.log(imgUpload);

    }

  }
  // console.log(preview);


  const reset = () => {
    setUserReport({
      ...userReport, images: []
    })
    setPreview("")
  }


  const submitUserReport = async () => {
    const { name, pNum, address, description, location, images } = userReport

    if (!name || !pNum || !address || !description || !location || images.length === 0) {
      toast.info(`Please fill the details completely`)
    } else {
      // create requestHeader
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      // create request body - formData()
      const reqBody = new FormData()
      // append them - reqBody.append(key, value), 
      // ie reqBody.append("title", title)
      //    reqBody.append("pNum", pNum)
      // ...... (like this for all, so instead)
      for (let key in userReport) {
        if (key != "images") {
          reqBody.append(key, userReport[key])
        } else {
          userReport.images.forEach(img => {
            reqBody.append("uploadImages", img)
          })
        }
      }

      try {
        // preloader here
        setLoading(true)
        const result = await userSubmitReportAPI(reqBody, reqHeader)
        console.log(result);

      } catch (error) {
        toast.error(`Something went wrong`)
      } finally {
        setTimeout(() => {
          setLoading(false)
          toast.success(`Reported submitted successfully`)
          setUserReport({
            name: "",
            pNum: "",
            address: "",
            description: "",
            location: "",
            images: []
          })
          setPreview("")
          navigate("/user-dashboard")
        }, 5000)


      }

    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoading(false)
  //   }, 10000)
  // }, [])


  return (
    <>
      {/* Navbar */}
      <UserNavbar />
      {loading && <Loader text="Submitting report..." />}


      {/* form */}
      <div className='grid grid-cols-6 bg-gray-200 pb-30 rounded-lg'>
        <div className='col-span-1 rounded-lg'></div>

        <div className='col-span-4 bg-white mt-20 rounded-lg'>

          {/* title */}
          <div className='w-full rounded-lg'>
            <h3 className='text-center font-bold text-2xl md:py-4 py-2 bg-blue-950 text-white rounded-t-lg'>Report Incident</h3>

          </div>

          {/* upload images */}
          <div>
            <div className="md:ms-10 mt-10">
              <h3 className="text-xl text-blue-950 font-bold ms-3 mb-3">Upload Images</h3>

              <div className='md:ms-40 md:px-0 px-5'>
                {preview ?
                  <div className='flex gap-2'>
                    {uploadedImages?.map((item, index) => (
                      <img key={index} src={item} className='md:w-25 w-15 md:h-25 h-15' alt="" />
                    ))
                    }
                  </div>
                  :
                  <label htmlFor="disasterImage"
                    className="border border-dashed border-gray-500 rounded-lg md:w-150 md:h-52 h-35 
                 flex flex-col justify-center items-center gap-3 cursor-pointer
                 hover:bg-gray-100 transition"
                  >
                    <FaCameraRetro className="text-5xl text-gray-500" />
                    <span className="text-gray-600 text-sm">Click to upload (Max Size: 5MB, Maximum 3 Images)</span>
                    <input onChange={(event) => handleImage(event)} type="file" multiple id="disasterImage" className="hidden" />
                  </label>}

                {preview &&
                  <div className='flex mt-2'>
                    {uploadedImages.length < 3 &&
                      <label htmlFor="disasterImage"
                        className="border border-dashed border-gray-500 rounded-s-lg md:w-75 md:h-25 h-17 
                   flex flex-col justify-center items-center gap-3 cursor-pointer
                   hover:bg-gray-100 transition"
                      >
                        <FaCameraRetro className="text-5xl text-gray-500" />
                        <span className="text-gray-600 text-sm">Click to upload (Max Size: 5MB, Maximum 3 Images)</span>
                        <input onChange={(event) => handleImage(event)} type="file" multiple id="disasterImage" className="hidden" />
                      </label>}

                    <button onClick={reset} className='bg-red-500 text-white rounded-lg font-semibold px-5 border hover:bg-white hover:text-red-500 hover:border-red-500 transition cursor-pointer'>Reset</button>

                  </div>
                }
              </div>
            </div>

          </div>

          {/* location */}
          <div>
            <div className="md:ms-10 ms-3 mt-10">
              <h3 className="text-xl text-blue-950 font-bold mb-3">Share Your Location</h3>
              <div className='md:flex md:mx-0 mx-5'>
                <div>
                  <input value={userReport.location} onChange={(e) => setUserReport({ ...userReport, location: e.target.value })} type="text" placeholder='Enter Address/ Place Name/ Pincode etc... ' className='border border-gray-500 md:p-3 p-1 md:w-100 w-full rounded-s' />
                </div>
                <div className='md:mt-0 mt-2'>
                  <button className='bg-blue-900 text-white md:p-3 p-1 rounded-e md:w-56 w-full flex justify-center items-center gap-2 cursor-pointer hover:text-blue-900 hover:border hover:border-blue-900 hover:bg-white transition '> <FaLocationCrosshairs /> Use Current Location</button>
                </div>
              </div>

            </div>
          </div>

          {/* contact and description */}
          <div className='md:flex md:mx-10 md:mt-5 mt-3 md:gap-5'>
            <div className='md:w-1/2 w-full md:px-0 px-5'>
              <h3 className="text-xl text-blue-950 font-bold mb-3">Your Contact Information</h3>
              <div className='border rounded border-gray-500 w-full md:mt-4'>
                <div className='w-full'>
                  <input value={userReport.name} onChange={(e) => setUserReport({ ...userReport, name: e.target.value })} type="text" placeholder='Name' className='md:p-3 p-1 w-full outline-none placeholder:ps-2' />
                  <hr className='md:mx-5 mx-2' />
                </div>
                <div className='w-full'>
                  <input value={userReport.pNum} onChange={(e) => setUserReport({ ...userReport, pNum: e.target.value })} type="number" placeholder='Contact Number' className='md:p-3 p-1 w-full outline-none placeholder:ps-2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none' />
                  <hr className='md:mx-5 mx-2' />
                </div>
                <div className='w-full'>
                  <input value={userReport.address} onChange={(e) => setUserReport({ ...userReport, address: e.target.value })} type="text" placeholder='Your Address' className='md:p-3 p-1 w-full outline-none placeholder:ps-2' />
                </div>
              </div>
            </div>

            <div className='md:w-1/2 w-full md:px-0 px-5 mt-1'>
              <h3 className="text-xl text-blue-950 font-bold mb-3">Description</h3>
              <div>
                <textarea value={userReport.description} onChange={(e) => setUserReport({ ...userReport, description: e.target.value })} className='w-full border border-gray-500 rounded resize-none placeholder:p-4 px-3 py-3 ' rows={5} placeholder='Briefly describe what happened? (eg: Major landslide at Kannur near old bridge) ' />
              </div>
            </div>
          </div>

          {/* button */}
          <div className='md:my-5 my-2 md:mx-10 mx-5 md:pb-5'>
            <button onClick={submitUserReport} className='bg-red-600 border text-white font-bold text-xl p-3 rounded w-full hover:border-red-500 hover:text-red-500 hover:bg-white cursor-pointer transition'>Submit Report</button>
          </div>



        </div>

        <div className='col-span-1'></div>

      </div>

      {/* footer */}
      <Footer />

    </>
  )
}

export default UserReportForm