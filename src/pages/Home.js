import React from "react";

export default function Home() {
  return (
    <>
      {/*Main information */}
      <h2 style={{ textAlign: "center" }}>Tervetuloa verkkokauppaamme</h2>

      {/*Carousel here?*/}
      <div className="row">
        <div className="info-col col-md-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            laboriosam enim sequi a distinctio facere hic dolor dignissimos
            fugit nostrum, expedita eos. Quod recusandae perferendis dolorem
            similique est dolor iste! Voluptas veniam odio, error iste ab nihil
            harum unde cum doloremque vitae a molestiae animi ut excepturi
            temporibus libero quibusdam minus voluptatum ipsam recusandae.
            Molestiae quae magni omnis blanditiis dolorum! In totam accusamus
            temporibus nihil quaerat, distinctio odit molestias quo dolorum
            voluptate, maxime et dolores ex velit impedit possimus soluta neque
            consectetur magnam debitis? Incidunt tenetur velit illum cumque
            ipsum! Commodi, accusantium quisquam. Modi, ex ut voluptas similique
            eius aspernatur mollitia at adipisci magnam quisquam laboriosam
            rerum doloremque perferendis doloribus quibusdam totam inventore
            placeat accusamus! Vitae exercitationem dignissimos tenetur
            sapiente? Suscipit blanditiis sequi, similique eum fugit officiis.
            Vitae quisquam ducimus vel rem, magnam aliquam adipisci sapiente
            necessitatibus dolores, doloremque, dicta deleniti. Deleniti autem
            dolorum explicabo, fugiat quibusdam omnis inventore a.
          </p>
        </div>
      </div>

      {/*Some product categories */}
      <div className="category-container">
      <div className="row">
        <div className="category-col col-sm-12 col-md-6 col-lg-3">
          <h2>Kategoria 1</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="currentColor"
            class="bi bi-1-circle"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
          </svg>
        </div>
        <div className="category-col col-sm-12 col-md-6 col-lg-3">
          <h2>Kategoria 2</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="currentColor"
            class="bi bi-2-circle"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
          </svg>
        </div>
        <div className="category-col col-sm-12 col-md-6 col-lg-3">
          <h2>Kategoria 3</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="currentColor"
            class="bi bi-3-circle"
            viewBox="0 0 16 16"
          >
            <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
          </svg>
        </div>
        <div className="category-col col-sm-12 col-md-6 col-lg-3">
          <h2>Kategoria 4</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="currentColor"
            class="bi bi-4-circle"
            viewBox="0 0 16 16"
          >
            <path d="M7.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
          </svg>
        </div>
      </div>
      </div>
    </>
  );
}
