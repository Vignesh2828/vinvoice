import React from "react";

// Components
import { InvoiceLayout } from "@/app/components";

// Helpers
import { formatNumberWithCommas, isDataUrl } from "@/lib/helpers";

// Variables
import { DATE_OPTIONS } from "@/lib/variables";

// Types
import { InvoiceType } from "@/types";

const InvoiceTemplate = (data: InvoiceType) => {
  const { sender, receiver, details } = data;

  return (
    <InvoiceLayout data={data}>
      <div className="flex justify-between">
        <div>
          {/* {details.invoiceLogo && (
            <img
              src={details.invoiceLogo}
              width={140}
              height={100}
              alt={`Logo of ${sender.name}`}
            />
          )} */}
          <h1 className="mt-2 text-sm md:text-sm font-semibold">
            {/* {sender.name} */}
            Naresh Kumar M
          </h1>
          <h1 className="mt-2 text-sm md:text-sm">PAN - AUQPN2096R</h1>
          <h1 className="mt-2 text-sm md:text-sm">
            Office Branches- MWC Chengalpattu / Guduvancheri
          </h1>
        </div>
        <div className="text-right">
          <address className="mt-4 not-italic text-gray-600 text-sm leading-relaxed">
            Head Office: <br />
            Door No - 836, 25th Street, B.V. Colony, <br />
            Vyasarpadi, Chennai - 600039.
          </address>
        </div>
      </div>

      <div className="flex items-center w-full my-6">
        <div className="w-4/5 h-6 bg-yellow-300"></div>
        <span className="mx-4 text-xl font-semibold text-gray-800 tracking-wide">
          INVOICE
        </span>
        <div className="w-1/5 h-6 bg-yellow-300"></div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Bill to:</h3>
          <h3 className="text-lg font-semibold text-gray-800">
            {receiver.name}
          </h3>
          <address className="mt-2 not-italic text-gray-500">
            {receiver.address}, {receiver.zipCode}
            <br />
            {receiver.city}, {receiver.country}
            <br />
          </address>
        </div>
        <div className="sm:text-right space-y-2">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">Pl:</dt>
              <dd className="col-span-3 text-gray-500">
                {details.invoiceNumber}
              </dd>
            </dl>
            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Invoice date:
              </dt>
              <dd className="col-span-3 text-gray-500">
                {new Date(details.invoiceDate).toLocaleDateString(
                  "en-US",
                  DATE_OPTIONS
                )}
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="border border-gray-200space-y-1">
          <div
            className="hidden sm:grid sm:grid-cols-6 py-4 p-1 tracking-wide"
            style={{ backgroundColor: "#383945", color : "white" }}
          >
            <div className="text-left text-xs font-medium uppercase">
              S.No
            </div>
            <div className="sm:col-span-2 text-xs font-medium  uppercase">
              Item Description
            </div>
            <div className="text-left text-xs font-medium uppercase">
              Qty
            </div>
            <div className="text-left text-xs font-medium  uppercase">
              Price
            </div>
            <div className="text-right text-xs font-medium uppercase">
              Total
            </div>
          </div>

          <div className="hidden sm:block border-b border-gray-200"></div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-1 p-1">
            {details.items.map((item, index) => (
              <React.Fragment key={index}>
                {/* S.No Column */}
                <div className="border-b border-gray-300">
                  <p className="text-gray-800">{index + 1}</p>
                </div>

                {/* Item Description */}
                <div className="col-span-full sm:col-span-2 border-b border-gray-300">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-600 whitespace-pre-line">
                    {item.description}
                  </p>
                </div>

                {/* Quantity */}
                <div className="border-b border-gray-300">
                  <p className="text-gray-800">{item.quantity}</p>
                </div>

                {/* Price */}
                <div className="border-b border-gray-300">
                  <p className="text-gray-800">{item.unitPrice}</p>
                </div>

                {/* Total */}
                <div className="border-b border-gray-300">
                  <p className="sm:text-right text-gray-800">{item.total}</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="sm:hidden border-b border-gray-200"></div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Payment Info – Left Side */}
        <div className="space-y-2 text-sm text-gray-700">
          <h3 className="font-semibold text-gray-800 text-base">
            Payment Info:
          </h3>

          <div className="flex">
            <span className="font-semibold w-32">Account No:</span>
            <span className="font-normal">
              {details.paymentInformation?.accountNumber
                ? details.paymentInformation?.accountNumber
                : "0912101062689"}
            </span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">Account Name:</span>
            <span className="font-normal">
              {details.paymentInformation?.accountName
                ? details.paymentInformation?.accountName.toUpperCase()
                : "NARESH KUMAR M"}
            </span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">Bank Name:</span>
            <span className="font-normal">
              {details.paymentInformation?.bankName
                ? details.paymentInformation?.bankName.toUpperCase()
                : "CANARA BANK"}
            </span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">IFSC Code:</span>
            <span className="font-normal">
              {details.paymentInformation?.ifscCode
                ? details.paymentInformation?.ifscCode
                : "CNRB0000912"}
            </span>
          </div>
        </div>

        {/* Price Summary – Right Side */}
        <div className="sm:text-right space-y-2">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
            <dl className="grid sm:grid-cols-5 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Subtotal:
              </dt>
              <dd className="col-span-2 text-gray-500">
                {formatNumberWithCommas(Number(details.subTotal))}{" "}
              </dd>
            </dl>

            {details.discountDetails?.amount !== undefined &&
              details.discountDetails?.amount > 0 && (
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Discount:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    {details.discountDetails.amountType === "amount"
                      ? `- ${details.discountDetails.amount}`
                      : `- ${details.discountDetails.amount}%`}
                  </dd>
                </dl>
              )}

            {details.taxDetails?.amount !== undefined &&
              details.taxDetails?.amount > 0 && (
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Tax:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    {details.taxDetails.amountType === "amount"
                      ? `+ ${details.taxDetails.amount}`
                      : `+ ${details.taxDetails.amount}%`}
                  </dd>
                </dl>
              )}

            {details.shippingDetails?.cost !== undefined &&
              details.shippingDetails?.cost > 0 && (
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Shipping:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    {details.shippingDetails.costType === "amount"
                      ? `+ ${details.shippingDetails.cost}`
                      : `+ ${details.shippingDetails.cost}%`}
                  </dd>
                </dl>
              )}

            <dl className="grid sm:grid-cols-5 gap-x-3 bg-yellow-300 rounded-md p-2">
              <dt className="col-span-3 font-semibold text-gray-800">Total:</dt>
              <dd className="col-span-2 text-gray-800 font-medium">
                {formatNumberWithCommas(Number(details.totalAmount))}{" "}
              </dd>
            </dl>

            {/* {details.totalAmountInWords && (
              <dl className="grid sm:grid-cols-5 gap-x-3">
                <dt className="col-span-3 font-semibold text-gray-800">
                  Total in words:
                </dt>
                <dd className="col-span-2 text-gray-500">
                  <em>
                    {details.totalAmountInWords} 
                  </em>
                </dd>
              </dl>
            )} */}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-gray-800 mb-3">
          Accounting, Tax & Other Services:
        </h3>
        <div
          style={{
            border: "1px solid #2874a6",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            padding: "1.5rem",
            width: "100%",
            maxWidth: "64rem",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#374151",
              fontSize: "0.875rem",
            }}
          >
            <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}>
              <li>Accounting</li>
              <li>Auditing</li>
              <li>Tax Audit</li>
              <li>PAN / TAN</li>
              <li>Food License</li>
              <li>GST Returns</li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}>
              <li>Income Tax Returns</li>
              <li>TDS Returns</li>
              <li>ROC Compliances</li>
              <li>GEM Registration</li>
              <li>GST Registration</li>
              <li>MSME Registration</li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}>
              <li>Financial Consultancy</li>
              <li>ISO Certification</li>
              <li>ISO Audit</li>
              <li>Firm Registration</li>
              <li>Company Registration</li>
              <li>Other Services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Signature */}
      {/* {details?.signature?.data && isDataUrl(details?.signature?.data) ? (
        <div className="mt-6">
          <p className="font-semibold text-gray-800">Signature:</p>
          <img
            src={details.signature.data}
            width={120}
            height={60}
            alt={`Signature of ${sender.name}`}
          />
        </div>
      ) : details.signature?.data ? (
        <div className="mt-6">
          <p className="text-gray-800">Signature:</p>
          <p
            style={{
              fontSize: 30,
              fontWeight: 400,
              fontFamily: `${details.signature.fontFamily}, cursive`,
              color: "black",
            }}
          >
            {details.signature.data}
          </p>
        </div>
      ) : null} */}

      <hr className="border-t-4 border-yellow-300 my-4" />

      <div className="p-2 w-full max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-gray-700">
          {/* Contact Section */}
          <div className="flex-1 space-y-0.5">
            <p>+91 95661 35117</p>
            <p>vyasarnaresh@gmail.com</p>
          </div>

          {/* Divider */}
          <div
            className="hidden sm:block"
            style={{
              width: "1px",
              height: "60px",
              backgroundColor: "#fde047", // Tailwind yellow-300
              margin: "0 8px",
            }}
          />

          {/* Quotes Section */}
          <div className="flex-1 space-y-0.5">
            <p>“A day without laughter is a day wasted.”</p>
            <p>“Be with Smiley face”</p>
            <p>“Help the needy.”</p>
          </div>

          {/* Divider */}
          <div
            className="hidden sm:block"
            style={{
              width: "1px",
              height: "60px",
              backgroundColor: "#fde047", // Tailwind yellow-300
              margin: "0 8px",
            }}
          />

          {/* Terms Section */}
          <div className="flex-1 space-y-0.5">
            <p className="font-medium text-gray-800">
              Thank you for your business.
            </p>
            <p className="font-medium text-gray-800">Terms & Conditions</p>
            <p>
              {data.details.paymentTerms
                ? data.details.paymentTerms
                : "30DAYS Credit from date of invoice."}
            </p>
          </div>
        </div>
      </div>
    </InvoiceLayout>
  );
};

export default InvoiceTemplate;
