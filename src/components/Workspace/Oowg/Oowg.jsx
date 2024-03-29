import { useState, useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { getDemoData, getTranslate } from "./functions.js";

import {
  generateHtmlTemplate,
  getWaterCss,
  getCustomStyles,
} from "./layouts/default/layout.js";

import ImageUploading from "react-images-uploading";
import getAmp from "./layouts/amp/amp.js";

export default function Oowg() {
  const [language, setLanguage] = useState(getDemoData().language);
  const [domainName, setDomainName] = useState(getDemoData().domainName);
  const [title, setTitle] = useState(getDemoData().title);
  const [description, setDescription] = useState(getDemoData().description);
  const [htmlContent, setHtmlContent] = useState(
    getDemoData(language).htmlContent
  );
  const [buttonText, setButtonText] = useState(
    getTranslate(language, "play_button_text")
  );
  const [buttonLink, setButtonLink] = useState("#");
  const [faq, setFaq] = useState(getTranslate(language, "demoFaq"));
  const [amp, setAmp] = useState(true);
  const [chatGPTApiKey, setChatGPTApiKey] = useState("");
  const [chatGPTQuestion, setChatGPTQuestion] = useState(
    "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI:"
  );
  const [chatGPTAnswer, setChatGPTAnswer] = useState("");

  useEffect(() => {
    setHtmlContent(getDemoData(language).htmlContent);
    setButtonText(getTranslate(language, "play_button_text"));
    setFaq(getTranslate(language, "demoFaq"));
  }, [language]);

  useEffect(() => {
    // setHtmlContent(getDemoData(language).htmlContent);
    // setButtonText(getTranslate(language, "play_button_text"));
  }, [faq]);

  // useEffect(() => {}, [amp]);

  const [contentImages, setContentImages] = useState(getDemoData().demoImages);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setContentImages(imageList);
  };
  const createWebsiteArchive = async () => {
    const zip = new JSZip();

    zip.file(
      "index.html",
      generateHtmlTemplate({
        language,
        domainName,
        title,
        description,
        htmlContent,
        contentImages,
        buttonLink,
        buttonText,
        faq,
        amp,
      })
    );
    if (amp) {
      zip.file(
        "amp.html",
        getAmp(
          language,
          domainName,
          title,
          description,
          htmlContent,
          buttonLink,
          buttonText,
          faq,
          contentImages
        )
      );
    }

    zip.file("assets/styles/water.min.css", getWaterCss());
    zip.file("assets/styles/style.css", getCustomStyles());
    const contentImg = zip.folder("assets/images/content");

    // img.file("image.jpg", imgData, { base64: true });
    contentImages.map((image, index) => {
      contentImg.file(
        image.file.name,
        image.data_url.split("data:image/jpeg;base64,")[1],
        { base64: true }
      );
    });

    const configFile = {
      language,
      domainName,
      title,
      description,
      htmlContent,
      buttonLink,
      buttonText,
      faq,
    };

    zip.file("config.json", JSON.stringify(configFile));

    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, domainName + ".zip");
    });
  };
  const blobContent = new Blob(
    [
      generateHtmlTemplate({
        language,
        domainName,
        title,
        description,
        htmlContent,
        isDemo: true,
        contentImages,
        buttonLink,
        buttonText,
        faq,
        amp,
      }),
    ],
    { type: "text/html" }
  );

  const iFrameSrc = URL.createObjectURL(blobContent);

  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
      >
        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full">
          {/* Page Section */}
          <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
              {/* Main Content */}
              <div className="order-last lg:order-first lg:col-span-8 p-5 lg:p-6 bg-white shadow-sm rounded-lg dark:bg-gray-900">
                {/*

                ADD YOUR MAIN CONTENT BELOW

                */}

                {/* Placeholder */}

                {/*flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64 dark:bg-gray-800 dark:border-gray-700*/}
                <div className="">
                  {/*min-h-screen flex items-center justify-center overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full*/}
                  <div className="">
                    {/* Installation Section */}
                    {/*py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12*/}
                    <div className="">
                      {/* Logo */}
                      <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold inline-flex items-center mb-1 space-x-3">
                          <svg
                            className="hi-solid hi-cube-transparent inline-block w-8 h-8 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>OOWG</span>
                        </h1>
                        <p className="text-gray-500">
                          One offer website generator
                        </p>
                      </div>
                      {/* END Logo */}

                      {/* Installation Form */}
                      <div className="relative">
                        <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 left-0 h-64 transform translate-x-16 translate-y-32" />
                        <div className="pattern-dots-md text-gray-300 absolute bottom-0 right-0 left-0 h-64 transform -translate-x-16 -translate-y-32" />
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            createWebsiteArchive();
                          }}
                        >
                          <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden relative">
                            <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                              <strong>Configuration:</strong> Website
                              information
                            </div>
                            <div className="p-5 lg:p-6 grow w-full">
                              <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">
                                <div className="space-y-1">
                                  <label htmlFor="name" className="font-medium">
                                    Website Language
                                  </label>
                                  <input
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    type="text"
                                    id="website_language"
                                    name="website_language"
                                    placeholder="en"
                                    onChange={(e) => {
                                      setLanguage(e.target.value);
                                      setButtonText(
                                        getTranslate(
                                          language,
                                          "play_button_text"
                                        )
                                      );
                                    }}
                                    value={`${language}`}
                                  />
                                  <p className="text-sm text-gray-500">
                                    <a
                                      href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"
                                      target={"_blank"}
                                      className={"underline underline-offset-1"}
                                    >
                                      ISO 3166-1 alpha-2
                                    </a>
                                    ,{" "}
                                    <small>
                                      change this value will reload demo data
                                      (HTML content, button text and link, faq
                                      questions and answers)
                                    </small>
                                  </p>
                                </div>
                                <div className="space-y-1">
                                  <label htmlFor="host" className="font-medium">
                                    Domain Name
                                  </label>
                                  <input
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    type="text"
                                    id="domain_name"
                                    name="domain_name"
                                    onChange={(e) =>
                                      setDomainName(e.target.value)
                                    }
                                    placeholder="example.com"
                                    value={`${domainName}`}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                              <strong>SEO params:</strong> Meta
                            </div>
                            <div className="p-5 lg:p-6 grow w-full">
                              <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">
                                <div className="space-y-1">
                                  <label htmlFor="name" className="font-medium">
                                    Title
                                  </label>
                                  <input
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    type="text"
                                    id="seo_title"
                                    name="seo_title"
                                    placeholder="SEO title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={`${title}`}
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label htmlFor="host" className="font-medium">
                                    Description
                                  </label>
                                  <input
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    type="text"
                                    id="seo_description"
                                    name="seo_description"
                                    placeholder="SEO description"
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                    value={`${description}`}
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label
                                    htmlFor="table_prefix"
                                    className="font-medium"
                                  >
                                    HTML content
                                  </label>
                                  <textarea
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-96"
                                    rows="5"
                                    id="html_content"
                                    name="html_content"
                                    placeholder="HTML content (seo text)"
                                    value={`${htmlContent}`}
                                    onChange={(e) =>
                                      setHtmlContent(e.target.value)
                                    }
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                              <strong>Options:</strong> AMP, Images
                            </div>
                            <div className="p-5 lg:p-6 grow w-full">
                              <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">
                                {/* Form Switches: With Labels and Description */}

                                <div className="space-y-6">
                                  <div className="space-x-2">
                                    <div className="flex justify-between items-center space-x-3">
                                      <label
                                        htmlFor="switch1"
                                        className="font-medium leading-relaxed"
                                      >
                                        Images
                                        <span className="block text-sm text-gray-500">
                                          Use filename banner.jpg for upload
                                          banner
                                        </span>
                                      </label>
                                      <ImageUploading
                                        multiple
                                        value={contentImages}
                                        onChange={onChange}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url"
                                      >
                                        {({
                                          imageList,
                                          onImageUpload,
                                          onImageRemoveAll,
                                          onImageUpdate,
                                          onImageRemove,
                                          isDragging,
                                          dragProps,
                                        }) => (
                                          // write your building UI
                                          <div className="upload__image-wrapper">
                                            <span
                                              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                              style={
                                                isDragging
                                                  ? { color: "red" }
                                                  : undefined
                                              }
                                              onClick={onImageUpload}
                                              {...dragProps}
                                            >
                                              <span>
                                                Click or Drop images here
                                              </span>
                                            </span>
                                            <br />
                                            {imageList.length > 0 && (
                                              <span onClick={onImageRemoveAll}>
                                                Remove all images
                                              </span>
                                            )}
                                            {imageList.map((image, index) => (
                                              <div
                                                key={index}
                                                className="image-item"
                                              >
                                                {/*<img*/}
                                                {/*  src={image["data_url"]}*/}
                                                {/*  alt=""*/}
                                                {/*  width="100"*/}
                                                {/*/>*/}

                                                <div className="image-item__btn-wrapper">
                                                  <small>
                                                    {image.file.name} [
                                                    <svg
                                                      onClick={() =>
                                                        onImageUpdate(index)
                                                      }
                                                      className="hi-solid hi-refresh inline-block w-5 h-5"
                                                      fill="currentColor"
                                                      viewBox="0 0 20 20"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        fillRule="evenodd"
                                                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                                        clipRule="evenodd"
                                                      />
                                                    </svg>
                                                    {" | "}
                                                    <svg
                                                      onClick={() =>
                                                        onImageRemove(index)
                                                      }
                                                      className="hi-solid hi-document-remove inline-block w-5 h-5"
                                                      fill="currentColor"
                                                      viewBox="0 0 20 20"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        fillRule="evenodd"
                                                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z"
                                                        clipRule="evenodd"
                                                      />
                                                    </svg>
                                                    ]
                                                  </small>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                      </ImageUploading>
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-6">
                                  <div className="space-x-2">
                                    <div className="flex justify-between items-center space-x-3">
                                      <label
                                        htmlFor="switch1"
                                        className="font-medium leading-relaxed"
                                      >
                                        AMP
                                        <span className="block text-sm text-gray-500">
                                          Android Mobile Pages for Google
                                        </span>
                                      </label>
                                      <input
                                        type="checkbox"
                                        defaultChecked={amp}
                                        id="switch1"
                                        name="switch1"
                                        onClick={() => {
                                          setAmp(!amp);
                                        }}
                                        className="form-switch transition-all duration-150 ease-out rounded-full h-7 w-12 text-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                      />
                                    </div>
                                  </div>
                                </div>

                                {/* END Form Switches: With Labels and Description */}
                              </div>
                            </div>
                            <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                              <strong>Content elements:</strong> Button
                            </div>
                            <div className="p-5 lg:p-6 grow w-full">
                              <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">
                                <div className="space-y-1">
                                  <label htmlFor="name" className="font-medium">
                                    Button
                                  </label>
                                  <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2">
                                    <input
                                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                      type="text"
                                      id="button_text"
                                      name="button_text"
                                      placeholder="Button Text"
                                      onChange={(e) => {
                                        setButtonText(e.target.value);
                                      }}
                                      value={`${buttonText}`}
                                    />
                                    <input
                                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                      type="text"
                                      id="button_link"
                                      name="button_link"
                                      placeholder="Button Link"
                                      onChange={(e) => {
                                        setButtonLink(e.target.value);
                                      }}
                                      value={`${buttonLink}`}
                                    />
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <label htmlFor="host" className="font-medium">
                                    FAQ
                                    {faq.length > 0 && (
                                      <small
                                        onClick={() => {
                                          setFaq([]);
                                        }}
                                      >
                                        [ Clean all QAs ]
                                      </small>
                                    )}
                                  </label>
                                  {faq.reverse().map((faq_item, index) => {
                                    const question = faq_item[0];
                                    const answer = faq_item[1];

                                    return (
                                      <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                                        {/* Card Header: Form Action multiple edits */}
                                        {/*<div className="py-4 px-5 lg:px-6 w-full bg-gray-50">*/}
                                        {/*  <h3>FAQ</h3>*/}
                                        {/*</div>*/}

                                        <div className="">
                                          {/* Form 1 */}
                                          <span className="p-4 rounded bg-gray-100 flex items-center justify-between space-x-2">
                                            <div>
                                              <h4 className="font-semibold mb-1">
                                                {index + 1}. {question}
                                              </h4>
                                              <p className="text-gray-600 text-sm">
                                                {answer}
                                              </p>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    );
                                  })}
                                  <label
                                    htmlFor="name"
                                    className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2 font-medium"
                                  >
                                    {" "}
                                    Add QA
                                  </label>
                                  <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2">
                                    <input
                                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                      type="text"
                                      id="faq_question"
                                      name="faq_question"
                                      placeholder="Question"
                                      onChange={(e) => {
                                        // setFaq([
                                        //   ...faq,
                                        //   [e.target.value, "answer"],
                                        // ]);
                                      }}
                                      // value={`${buttonText}`}
                                    />
                                    <input
                                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                      type="text"
                                      id="faq_answer"
                                      name="faq_answer"
                                      placeholder="Answer"
                                      onChange={(e) => {
                                        // setButtonLink(e.target.value);
                                      }}
                                      // value={`${buttonLink}`}
                                    />
                                    <div>
                                      {/* Button (small) */}
                                      <button
                                        type="button"
                                        className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                                        onClick={(e) => {
                                          const question =
                                            document.getElementById(
                                              "faq_question"
                                            ).value;
                                          const answer =
                                            document.getElementById(
                                              "faq_answer"
                                            ).value;
                                          setFaq([...faq, [question, answer]]);
                                          document.getElementById(
                                            "faq_question"
                                          ).value = "";
                                          document.getElementById(
                                            "faq_answer"
                                          ).value = "";
                                        }}
                                      >
                                        <svg
                                          className="hi-mini hi-plus inline-block w-5 h-5"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                        </svg>
                                      </button>
                                      {/* END Button (small) */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*<div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">*/}
                            {/*  <strong>Ai Features:</strong> ChatGPT*/}
                            {/*</div>*/}
                            {/*<div className="p-5 lg:p-6 grow w-full">*/}
                            {/*  <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">*/}
                            {/*    <div className="space-y-1">*/}
                            {/*      <label htmlFor="name" className="font-medium">*/}
                            {/*        ChatGPT API Key*/}
                            {/*      </label>*/}
                            {/*      <input*/}
                            {/*        className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"*/}
                            {/*        type="text"*/}
                            {/*        id="chatgpt_api_key1"*/}
                            {/*        name="chatgpt_api_key1"*/}
                            {/*        placeholder="ChatGPT Api Key"*/}
                            {/*        onChange={(e) => {*/}
                            {/*          setChatGPTApiKey(e.target.value);*/}
                            {/*        }}*/}
                            {/*      />*/}
                            {/*      <label htmlFor="name" className="font-medium">*/}
                            {/*        Question*/}
                            {/*      </label>*/}
                            {/*      <div className="sm:flex">*/}
                            {/*        <input*/}
                            {/*          className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"*/}
                            {/*          type="text"*/}
                            {/*          id="chatgpt_question"*/}
                            {/*          name="chatgpt_question"*/}
                            {/*          placeholder="ChatGPT Question"*/}
                            {/*          onChange={(e) => {*/}
                            {/*            setChatGPTQuestion(e.target.value);*/}
                            {/*          }}*/}
                            {/*          value={chatGPTQuestion}*/}
                            {/*        />*/}
                            {/*        <button*/}
                            {/*          type="button"*/}
                            {/*          className="ml-5 inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"*/}
                            {/*          onClick={() => {*/}
                            {/*            fetch(*/}
                            {/*              `https://api.openai.com/v1/completions`,*/}
                            {/*              {*/}
                            {/*                body: JSON.stringify({*/}
                            {/*                  model: "text-davinci-003",*/}
                            {/*                  prompt: `${chatGPTQuestion}`,*/}
                            {/*                  temperature: 0.9,*/}
                            {/*                  max_tokens: 150,*/}
                            {/*                  top_p: 1,*/}
                            {/*                  frequency_penalty: 0.0,*/}
                            {/*                  presence_penalty: 0.6,*/}
                            {/*                  stop: [" Human:", " AI:"],*/}
                            {/*                }),*/}
                            {/*                method: "POST",*/}
                            {/*                headers: {*/}
                            {/*                  "content-type":*/}
                            {/*                    "application/json",*/}
                            {/*                  Authorization: `Bearer  ${chatGPTApiKey}`,*/}
                            {/*                },*/}
                            {/*              }*/}
                            {/*            ).then((response) => {*/}
                            {/*              if (response.ok) {*/}
                            {/*                response.json().then((json) => {*/}
                            {/*                  // console.log(json);*/}
                            {/*                  setChatGPTAnswer(*/}
                            {/*                    json.choices[0].text*/}
                            {/*                  );*/}
                            {/*                });*/}
                            {/*              } else {*/}
                            {/*                response.json().then((json) => {*/}
                            {/*                  // console.log(json);*/}
                            {/*                  setChatGPTAnswer(*/}
                            {/*                    json.error.message*/}
                            {/*                  );*/}
                            {/*                });*/}
                            {/*              }*/}
                            {/*            });*/}
                            {/*          }}*/}
                            {/*        >*/}
                            {/*          <svg*/}
                            {/*            className="hi-mini hi-question-mark-circle inline-block w-5 h-5"*/}
                            {/*            xmlns="http://www.w3.org/2000/svg"*/}
                            {/*            viewBox="0 0 20 20"*/}
                            {/*            fill="currentColor"*/}
                            {/*            aria-hidden="true"*/}
                            {/*          >*/}
                            {/*            <path*/}
                            {/*              fillRule="evenodd"*/}
                            {/*              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"*/}
                            {/*              clipRule="evenodd"*/}
                            {/*            />*/}
                            {/*          </svg>*/}
                            {/*        </button>*/}
                            {/*      </div>*/}
                            {/*      {chatGPTAnswer && (*/}
                            {/*        <>*/}
                            {/*          <label*/}
                            {/*            htmlFor="name"*/}
                            {/*            className="font-medium"*/}
                            {/*          >*/}
                            {/*            Answer*/}
                            {/*          </label>*/}
                            {/*          <textarea*/}
                            {/*            className="w-full block border border-gray-200 rounded px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"*/}
                            {/*            id="details"*/}
                            {/*            name="details"*/}
                            {/*            rows="4"*/}
                            {/*            placeholder="Enter further details"*/}
                            {/*            value={chatGPTAnswer}*/}
                            {/*            disabled*/}
                            {/*          ></textarea>*/}
                            {/*        </>*/}
                            {/*      )}*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}
                            <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                              <button
                                type="submit"
                                className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none w-full px-4 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                              >
                                Generate & Download
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* END Installation Form */}
                    </div>
                    {/* END Installation Section */}
                  </div>
                </div>

                {/*

                ADD YOUR MAIN CONTENT ABOVE

                */}
              </div>
              {/* END Main Content */}

              {/* Side content */}
              <div
                className={`lg:block order-first lg:order-last lg:col-span-4 p-5 lg:p-6 bg-white shadow-sm rounded-lg dark:bg-gray-900`}
              >
                {/*flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64 dark:bg-gray-800 dark:border-gray-700*/}
                {/*<div className="">*/}
                <iframe
                  src={iFrameSrc}
                  frameBorder="0"
                  width={"100%"}
                  className={"min-h-screen h-full"}
                ></iframe>
                {/*<HTMLString*/}
                {/*  html={generateHtmlTemplate({*/}
                {/*    language,*/}
                {/*    domainName,*/}
                {/*    title,*/}
                {/*    description,*/}
                {/*    htmlContent,*/}
                {/*  })}*/}
                {/*/>*/}
                {/*</div>*/}
                {/*

                ADD YOUR SIDE CONTENT BELOW

                */}

                {/* Placeholder */}

                {/*

                ADD YOUR SIDE CONTENT ABOVE

                */}
              </div>
              {/* END Side content */}
            </div>
          </div>
          {/* END Page Section */}
        </main>
      </div>
    </>
  );
}
