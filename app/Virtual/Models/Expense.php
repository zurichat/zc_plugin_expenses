<?php

/**
 * Class Expense
 *
 * @OA\Schema(
 *     description="Expense model"
 * )
 */


class Expense
{
    /**
     * @OA\Property(
     *     title="_ID",
     *     description="ID of the expense",
     *     example="61434b7dd0284bc6a92233f6"
     * )
     *
     * @var string
     */
    private $_id;


    /**
     * @OA\Property(
     *     title="Author ID",
     *     description="ID of Expense List Author",
     *     example="613d3e65e4010959c8dc0c11"
     * )
     *
     * @var string
     */
    private $author_id;


    /**
     * @OA\Property(
     *     title="Author Name",
     *     description="Name of Expense List Author",
     *     example="Airon Dev"
     * )
     *
     * @var string
     */
    private $author_name;


    /**
     * @OA\Property(
     *      title="Title",
     *      description="List title",
     *      example="Travel Expense"
     * )
     *
     * @var string
     */
    public $title;

    /**
     * @OA\Property(
     *      title="Description",
     *      description="List Description",
     *      example="Breakdown of travel estimate for company delegates to Abuja"
     * )
     *
     * @var string
     */
    public $description;



    /**
     * @OA\Property(
     *      title="List Items",
     *      description="List Items",
     *       properties={
     *          @OA\Property(
     *              property="name",
     *              type="string",
     *              description="name of item",
     *              example="Fuel"
     *          ),
     *          @OA\Property(
     *              property="quantity",
     *              type="string",
     *              description="quantity of item",
     *              example="14 Litres"
     *          ),
     *          @OA\Property(
     *              property="unit_price",
     *              type="integer",
     *              description="price of item",
     *              example="190"
     *          ),
     *      },
     * )
     *
     * @var string
     */
    public $items;



    /**
     * @OA\Property(
     *      title="Admin Comment",
     *      description="Admin Comment on list",
     *      example="Sorry we cannot approve this expense budget at this time"
     * )
     *
     * @var string
     */
    public $admin_comment;


    /**
     * @OA\Property(
     *      title="Total",
     *      description="",
     *      example="N44,000"
     * )
     *
     * @var string
     */
    public $total;



    /**
     * @OA\Property(
     *      title="Status",
     *      description="",
     *      example="Declined"
     * )
     *
     * @var string
     */
    public $status;

    /**
     * @OA\Property(
     *     title="Created at",
     *     description="Created at",
     *     example="1631800187",
     *     format="datetime",
     *     type="string"
     * )
     *
     * @var \DateTime
     */
    private $created_at;

    /**
     * @OA\Property(
     *     title="Updated at",
     *     description="Updated at",
     *     example="1631800187",
     *     format="datetime",
     *     type="string"
     * )
     *
     * @var \DateTime
     */
    private $updated_at;

    /**
     * @OA\Property(
     *     title="Deleted at",
     *     description="Deleted at",
     *     example="1631800187",
     *     format="datetime",
     *     type="string"
     * )
     *
     * @var \DateTime
     */
    private $deleted_at;
}