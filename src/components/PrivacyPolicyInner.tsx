"use client";
import React, { useState } from "react";

const PrivacyPolicyInner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <section className='privacy-policy py-120'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-11'>
            <div className='row gy-5'>
              <div className='col-md-4'>
                <div className='tw-py-13 tw-px-7 bg-neutral-100'>
                  <div
                    className='nav flex-column nav-pills active-bg-white-border-primary'
                    id='v-pills-tab'
                    role='tablist'
                    aria-orientation='vertical'
                  >
                    <button
                      className={`nav-link tw-px-8 tw-py-5 text-neutral-500 fw-semibold text-start w-100 tw-rounded-md ${
                        activeTab === 1 && "active"
                      } `}
                      onClick={() => setActiveTab(1)}
                    >
                      Bookings &amp; Prices
                    </button>
                    <button
                      className={`nav-link tw-px-8 tw-py-5 text-neutral-500 fw-semibold text-start w-100 tw-rounded-md ${
                        activeTab === 2 && "active"
                      } `}
                      onClick={() => setActiveTab(2)}
                    >
                      Payments, Refunds &amp; Credits
                    </button>
                    <button
                      className={`nav-link tw-px-8 tw-py-5 text-neutral-500 fw-semibold text-start w-100 tw-rounded-md ${
                        activeTab === 3 && "active"
                      } `}
                      onClick={() => setActiveTab(3)}
                    >
                      Changes
                    </button>
                    <button
                      className={`nav-link tw-px-8 tw-py-5 text-neutral-500 fw-semibold text-start w-100 tw-rounded-md ${
                        activeTab === 4 && "active"
                      } `}
                      onClick={() => setActiveTab(4)}
                    >
                      Cancellations
                    </button>
                    <button
                      className={`nav-link tw-px-8 tw-py-5 text-neutral-500 fw-semibold text-start w-100 tw-rounded-md ${
                        activeTab === 5 && "active"
                      } `}
                      onClick={() => setActiveTab(5)}
                    >
                      Included Services
                    </button>
                    <button
                      className={`nav-link tw-px-8 tw-py-5 text-neutral-500 fw-semibold text-start w-100 tw-rounded-md ${
                        activeTab === 6 && "active"
                      } `}
                      onClick={() => setActiveTab(6)}
                    >
                      Trip Operation
                    </button>
                    <button
                      className={`nav-link tw-px-8 tw-py-5 text-neutral-500 fw-semibold text-start w-100 tw-rounded-md ${
                        activeTab === 7 && "active"
                      } `}
                      onClick={() => setActiveTab(7)}
                    >
                      Participation
                    </button>
                    <button
                      className={`nav-link tw-px-8 tw-py-5 text-neutral-500 fw-semibold text-start w-100 tw-rounded-md ${
                        activeTab === 8 && "active"
                      } `}
                      onClick={() => setActiveTab(8)}
                    >
                      Passports, Visas &amp; Entry Require
                    </button>
                    <button
                      className={`nav-link tw-px-8 tw-py-5 text-neutral-500 fw-semibold text-start w-100 tw-rounded-md ${
                        activeTab === 9 && "active"
                      } `}
                      onClick={() => setActiveTab(9)}
                    >
                      Your Information &amp; Privacy
                    </button>
                    <button
                      className={`nav-link tw-px-8 tw-py-5 text-neutral-500 fw-semibold text-start w-100 tw-rounded-md ${
                        activeTab === 10 && "active"
                      } `}
                      onClick={() => setActiveTab(10)}
                    >
                      Miscellanea
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-8'>
                <div className='tab-content ps-lg-5' id='v-pills-tabContent'>
                  <div
                    className={`tab-pane fade show ${
                      activeTab === 1 && "active"
                    } `}
                  >
                    <div>
                      {/* Content Start */}
                      <div>
                        <h3 className='tw-mb-8'>1.Cancellation and Changes</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Compensation will not be paid for changes or
                          cancellations caused by Acts of God (Force Majeure),
                          war, threat of war, riot, civil strike, industrial
                          dispute, terrorist activity, natural or man-made
                          disaster, fire, technical problems to transport,
                          closure or congestion of airports, strikes or other
                          industrial action, adverse weather conditions or any
                          other event beyond the Company's control. It is
                          essential that you take out adequate travel insurance.
                        </p>
                      </div>
                      <div className='tw-mt-9'>
                        <h3 className='tw-mb-8'>1.Cancellation by You</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <div className='tw-my-4'>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>30 days or more 50% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>15 - 30 days 100% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>8 - 15 days 80% of Tour Cost</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>1 - 7 days 100% of Tour Cost</span>
                          </p>
                        </div>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                      </div>
                      {/* Content End */}
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade show ${
                      activeTab === 2 && "active"
                    } `}
                  >
                    <div>
                      {/* Content Start */}
                      <div>
                        <h3 className='tw-mb-8'>1.Cancellation and Changes</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Compensation will not be paid for changes or
                          cancellations caused by Acts of God (Force Majeure),
                          war, threat of war, riot, civil strike, industrial
                          dispute, terrorist activity, natural or man-made
                          disaster, fire, technical problems to transport,
                          closure or congestion of airports, strikes or other
                          industrial action, adverse weather conditions or any
                          other event beyond the Company's control. It is
                          essential that you take out adequate travel insurance.
                        </p>
                      </div>
                      <div className='tw-mt-9'>
                        <h3 className='tw-mb-8'>1.Cancellation by You</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <div className='tw-my-4'>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>30 days or more 50% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>15 - 30 days 100% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>8 - 15 days 80% of Tour Cost</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>1 - 7 days 100% of Tour Cost</span>
                          </p>
                        </div>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                      </div>
                      {/* Content End */}
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade show ${
                      activeTab === 3 && "active"
                    } `}
                  >
                    <div>
                      {/* Content Start */}
                      <div>
                        <h3 className='tw-mb-8'>1.Cancellation and Changes</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Compensation will not be paid for changes or
                          cancellations caused by Acts of God (Force Majeure),
                          war, threat of war, riot, civil strike, industrial
                          dispute, terrorist activity, natural or man-made
                          disaster, fire, technical problems to transport,
                          closure or congestion of airports, strikes or other
                          industrial action, adverse weather conditions or any
                          other event beyond the Company's control. It is
                          essential that you take out adequate travel insurance.
                        </p>
                      </div>
                      <div className='tw-mt-9'>
                        <h3 className='tw-mb-8'>1.Cancellation by You</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <div className='tw-my-4'>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>30 days or more 50% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>15 - 30 days 100% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>8 - 15 days 80% of Tour Cost</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>1 - 7 days 100% of Tour Cost</span>
                          </p>
                        </div>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                      </div>
                      {/* Content End */}
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade show ${
                      activeTab === 4 && "active"
                    } `}
                  >
                    <div>
                      {/* Content Start */}
                      <div>
                        <h3 className='tw-mb-8'>1.Cancellation and Changes</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Compensation will not be paid for changes or
                          cancellations caused by Acts of God (Force Majeure),
                          war, threat of war, riot, civil strike, industrial
                          dispute, terrorist activity, natural or man-made
                          disaster, fire, technical problems to transport,
                          closure or congestion of airports, strikes or other
                          industrial action, adverse weather conditions or any
                          other event beyond the Company's control. It is
                          essential that you take out adequate travel insurance.
                        </p>
                      </div>
                      <div className='tw-mt-9'>
                        <h3 className='tw-mb-8'>1.Cancellation by You</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <div className='tw-my-4'>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>30 days or more 50% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>15 - 30 days 100% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>8 - 15 days 80% of Tour Cost</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>1 - 7 days 100% of Tour Cost</span>
                          </p>
                        </div>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                      </div>
                      {/* Content End */}
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade show ${
                      activeTab === 5 && "active"
                    } `}
                  >
                    <div>
                      {/* Content Start */}
                      <div>
                        <h3 className='tw-mb-8'>1.Cancellation and Changes</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Compensation will not be paid for changes or
                          cancellations caused by Acts of God (Force Majeure),
                          war, threat of war, riot, civil strike, industrial
                          dispute, terrorist activity, natural or man-made
                          disaster, fire, technical problems to transport,
                          closure or congestion of airports, strikes or other
                          industrial action, adverse weather conditions or any
                          other event beyond the Company's control. It is
                          essential that you take out adequate travel insurance.
                        </p>
                      </div>
                      <div className='tw-mt-9'>
                        <h3 className='tw-mb-8'>1.Cancellation by You</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <div className='tw-my-4'>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>30 days or more 50% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>15 - 30 days 100% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>8 - 15 days 80% of Tour Cost</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>1 - 7 days 100% of Tour Cost</span>
                          </p>
                        </div>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                      </div>
                      {/* Content End */}
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade show ${
                      activeTab === 6 && "active"
                    } `}
                  >
                    <div>
                      {/* Content Start */}
                      <div>
                        <h3 className='tw-mb-8'>1.Cancellation and Changes</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Compensation will not be paid for changes or
                          cancellations caused by Acts of God (Force Majeure),
                          war, threat of war, riot, civil strike, industrial
                          dispute, terrorist activity, natural or man-made
                          disaster, fire, technical problems to transport,
                          closure or congestion of airports, strikes or other
                          industrial action, adverse weather conditions or any
                          other event beyond the Company's control. It is
                          essential that you take out adequate travel insurance.
                        </p>
                      </div>
                      <div className='tw-mt-9'>
                        <h3 className='tw-mb-8'>1.Cancellation by You</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <div className='tw-my-4'>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>30 days or more 50% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>15 - 30 days 100% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>8 - 15 days 80% of Tour Cost</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>1 - 7 days 100% of Tour Cost</span>
                          </p>
                        </div>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                      </div>
                      {/* Content End */}
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade show ${
                      activeTab === 7 && "active"
                    } `}
                  >
                    <div>
                      {/* Content Start */}
                      <div>
                        <h3 className='tw-mb-8'>1.Cancellation and Changes</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Compensation will not be paid for changes or
                          cancellations caused by Acts of God (Force Majeure),
                          war, threat of war, riot, civil strike, industrial
                          dispute, terrorist activity, natural or man-made
                          disaster, fire, technical problems to transport,
                          closure or congestion of airports, strikes or other
                          industrial action, adverse weather conditions or any
                          other event beyond the Company's control. It is
                          essential that you take out adequate travel insurance.
                        </p>
                      </div>
                      <div className='tw-mt-9'>
                        <h3 className='tw-mb-8'>1.Cancellation by You</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <div className='tw-my-4'>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>30 days or more 50% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>15 - 30 days 100% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>8 - 15 days 80% of Tour Cost</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>1 - 7 days 100% of Tour Cost</span>
                          </p>
                        </div>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                      </div>
                      {/* Content End */}
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade show ${
                      activeTab === 8 && "active"
                    } `}
                  >
                    <div>
                      {/* Content Start */}
                      <div>
                        <h3 className='tw-mb-8'>1.Cancellation and Changes</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Compensation will not be paid for changes or
                          cancellations caused by Acts of God (Force Majeure),
                          war, threat of war, riot, civil strike, industrial
                          dispute, terrorist activity, natural or man-made
                          disaster, fire, technical problems to transport,
                          closure or congestion of airports, strikes or other
                          industrial action, adverse weather conditions or any
                          other event beyond the Company's control. It is
                          essential that you take out adequate travel insurance.
                        </p>
                      </div>
                      <div className='tw-mt-9'>
                        <h3 className='tw-mb-8'>1.Cancellation by You</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <div className='tw-my-4'>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>30 days or more 50% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>15 - 30 days 100% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>8 - 15 days 80% of Tour Cost</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>1 - 7 days 100% of Tour Cost</span>
                          </p>
                        </div>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                      </div>
                      {/* Content End */}
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade show ${
                      activeTab === 9 && "active"
                    } `}
                  >
                    <div>
                      {/* Content Start */}
                      <div>
                        <h3 className='tw-mb-8'>1.Cancellation and Changes</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Compensation will not be paid for changes or
                          cancellations caused by Acts of God (Force Majeure),
                          war, threat of war, riot, civil strike, industrial
                          dispute, terrorist activity, natural or man-made
                          disaster, fire, technical problems to transport,
                          closure or congestion of airports, strikes or other
                          industrial action, adverse weather conditions or any
                          other event beyond the Company's control. It is
                          essential that you take out adequate travel insurance.
                        </p>
                      </div>
                      <div className='tw-mt-9'>
                        <h3 className='tw-mb-8'>1.Cancellation by You</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <div className='tw-my-4'>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>30 days or more 50% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>15 - 30 days 100% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>8 - 15 days 80% of Tour Cost</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>1 - 7 days 100% of Tour Cost</span>
                          </p>
                        </div>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                      </div>
                      {/* Content End */}
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade show ${
                      activeTab === 10 && "active"
                    } `}
                  >
                    <div>
                      {/* Content Start */}
                      <div>
                        <h3 className='tw-mb-8'>1.Cancellation and Changes</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Compensation will not be paid for changes or
                          cancellations caused by Acts of God (Force Majeure),
                          war, threat of war, riot, civil strike, industrial
                          dispute, terrorist activity, natural or man-made
                          disaster, fire, technical problems to transport,
                          closure or congestion of airports, strikes or other
                          industrial action, adverse weather conditions or any
                          other event beyond the Company's control. It is
                          essential that you take out adequate travel insurance.
                        </p>
                      </div>
                      <div className='tw-mt-9'>
                        <h3 className='tw-mb-8'>1.Cancellation by You</h3>
                        <h6 className='tw-mb-5'>Description:</h6>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          a) Occasionally it may be deemed necessary to make
                          changes to your holiday and the Company reserves the
                          right to do so at any time, and you will be notified
                          of any changes at the earliest possible opportunity.
                          If a major change to your tour is necessary, providing
                          it does not arise from circumstances beyond the
                          Company's control, you may choose (i) to accept the
                          change of arrangements (ii) to purchase another
                          holiday from us or (iii) to cancel your holiday.
                          Compensation may be payable in cases of major change
                          as detailed below.
                        </p>
                        <div className='tw-my-4'>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>30 days or more 50% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>15 - 30 days 100% of Deposit</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>8 - 15 days 80% of Tour Cost</span>
                          </p>
                          <p className='fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3'>
                            <span className='tw-w-105 tw-h-105 bg-neutral-600 rounded-circle' />
                            <span>1 - 7 days 100% of Tour Cost</span>
                          </p>
                        </div>
                        <p className='text-neutral-500 tw-leading-212 tw-mb-6'>
                          b) No compensation will be payable for minor changes.
                          Minor changes include minimal changes to departure and
                          arrival times, changes to the type of aircraft used
                          and restaurant and accommodation changes to a
                          comparable or superior standard.
                        </p>
                      </div>
                      {/* Content End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyInner;
