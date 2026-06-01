 ${activeItemId ? " w-[240px] xs:w-[240px] sm:w-[240px] md:w-[240px] lg:w-[240px] xl:w-[60px]  " : 
                  "xl:w-[240px] sm:w-[60px] md:w-[60px] lg:w-[60px] w-[0px] xs:w-[0]"}

                  {...(activeItemId
                                          ? {
                                              onMouseEnter: () => dispatch(setToggleDropdown(item.id)),
                                              onMouseLeave: () => dispatch(setToggleDropdown(null)),
                                            }
                                          : {
                                              onClick: () => dispatch(setToggleDropdown(item.id)),
                                            }
                                        )}